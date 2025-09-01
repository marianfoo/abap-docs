# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Access Control / ABAP CDS - DCL Statements / CDS DCL - DEFINE ACCESSPOLICY

Included pages: 8


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) → 

CDS DCL - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_ap_annotations.htm)*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm) *|* [aspect\_definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm)
}

Effect

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry") access\_policy in the [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry") to be used as a medium for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm)

-   A self-defined aspect [DEFINE ASPECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm).

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_ap_annotations.htm) in front of the actual definition of the access policy.

Hints

-   Separate [DCL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendcl_source_code_glosry.htm "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[CDS DCL - DEFINE ACCESSPOLICY, access\_policy\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_ap_annotations.htm)
[CDS DCL - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm)
[CDS DCL - DEFINE ASPECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm)


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm) → 

CDS DCL - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm) as an access policy annotation in the definition of a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm). The character @ must be placed directly in front of the name annotation of the annotation.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

See the note

\-

\-

\-

Hint

The EndUserText.label annotation is not recommended for CDS access policies, since its value is overwritten by the identically named annotation of the [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_pm_annotations.htm) or [aspect](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_as_annotations.htm) in question.

This means that the short text for these objects should be entered here directly and not in the CDS access policy.


### abencds_f1_define_pfcg_mapping.htm

  

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


### abencds_f1_dcl_pm_annotations.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm) →  [CDS DCL - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm) → 

CDS DCL - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm) in the definition of a [CDS PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_DCL_PM_ANNOTATIONS_1)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the PFCG mapping

Character string with maximum 60 characters

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.


### abencds_f1_define_pfcg_mapping.htm

  

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


### abencds_f1_define_generic_aspect.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm) → 

CDS DCL - DEFINE ASPECT

Syntax

*\[*[aspect\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_as_annotations.htm)*\]*
*\[*DEFINE*\]* ASPECT aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a self-defined aspect aspect as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm). The name of the self-defined aspect must be the same as the name of the CDS access policy.

The definition of a self-defined aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as the input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of the output fields can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value.

The following are possible as bypass conditions aspect\_bypass\_condition:

-   [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_null_v2.htm)

-   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_initial_v2.htm)

-   IS INITIAL OR NULL
    Is met if the value of the aspect is NULL or the type-compliant initial value.

-   \= [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm)

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the self-defined aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk \*) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a self-defined aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, whereas aspect entities may freely specify their data sources and cannot control whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To emphasize this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Hints

-   Just adding the annotations, however, does not activate auditing. This annotation should only be set if it is ensure that auditing takes place.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a self-defined aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, self-defined aspects are defined internally using a [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry") after EXISTS.
    

Continue
[CDS DCL - DEFINE ASPECT, aspect\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_as_annotations.htm)


### abencds_f1_dcl_as_annotations.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm) →  [CDS DCL - DEFINE ASPECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm) → 

CDS DCL - DEFINE ASPECT, aspect\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm) in the definition of an aspect [DEFINE ASPECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm). The character @ must be placed in front of the name annotation of the annotation.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_DCL_AS_ANNOTATIONS_1)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the PFCG mapping

Character string with a maximum of 60 characters

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.


### abencds_f1_define_generic_aspect.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm) → 

CDS DCL - DEFINE ASPECT

Syntax

*\[*[aspect\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_as_annotations.htm)*\]*
*\[*DEFINE*\]* ASPECT aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a self-defined aspect aspect as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm). The name of the self-defined aspect must be the same as the name of the CDS access policy.

The definition of a self-defined aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as the input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of the output fields can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value.

The following are possible as bypass conditions aspect\_bypass\_condition:

-   [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_null_v2.htm)

-   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_initial_v2.htm)

-   IS INITIAL OR NULL
    Is met if the value of the aspect is NULL or the type-compliant initial value.

-   \= [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm)

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the self-defined aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk \*) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a self-defined aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, whereas aspect entities may freely specify their data sources and cannot control whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To emphasize this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Hints

-   Just adding the annotations, however, does not activate auditing. This annotation should only be set if it is ensure that auditing takes place.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a self-defined aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, self-defined aspects are defined internally using a [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry") after EXISTS.
    

Continue
[CDS DCL - DEFINE ASPECT, aspect\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_as_annotations.htm)
