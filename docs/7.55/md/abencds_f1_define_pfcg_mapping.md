  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm) → 

CDS DCL - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_pm_annotations.htm)*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order is relevant.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg_mapping.htm) in exactly those [PFCG conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_field_glosry.htm "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg_mapping.htm) in a [PFCG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg_mapping.htm) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.
    

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) of the statement DEFINE ROLE.

Hint

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS.

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg_mapping.htm) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[CDS DCL - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_pm_annotations.htm)