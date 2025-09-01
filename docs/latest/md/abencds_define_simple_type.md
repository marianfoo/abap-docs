  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_type.htm) →  [ABAP CDS - Simple Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20DEFINE%20TYPE%20simple_type%2C%20ABENCDS_DEFINE_SIMPLE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

CDS TDL - DEFINE TYPE simple\_type

Syntax

*\[*[@type\_annot1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)*\]*
*\[*[@type\_annot2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)*\]*
...
DEFINE TYPE simple\_type : [dtype](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_overview_builtin_types.htm)
                        *|* [data\_element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dtel.htm)
                        *|* [simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type.htm)

Effect

Defines a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") in the [CDS TDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tdl_glosry.htm "Glossary Entry"). A CDS simple type defines an [elementary data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") natively in [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry").

A CDS simple type can be enriched with [CDS annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") [type\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm). All annotations are optional and a simple type can also be created without any annotations. If specified, the type annotations must be defined in front of the statement DEFINE TYPE.

The name simple\_type of the CDS simple type is defined after the DEFINE TYPE statement. It is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. The general rules for CDS object names described in topic [ABAP CDS - General Syntax Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm) apply. The name of the CDS simple type must be the same as the name of the TDL source code.

Typing

A simple type can be typed as follows:

-   Using a built-in ABAP Dictionary data type [dtype](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_overview_builtin_types.htm). All possible types and rules are described in the topic [ABAP CDS - Overview of Built-In DDIC Types That Can Be Used in ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_overview_builtin_types.htm).
-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry") [data\_element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dtel.htm). The rules, including inheritance rules, are described in topic [CDS Simple Type, data\_element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dtel.htm).
-   Using another CDS simple type [simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type.htm). The rules are described in topic [CDS Simple Type, simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type.htm).

Use

CDS simple types can be used in the following places:

-   To type another CDS simple type.
    
    Note: The maximum nesting depth is five. This means that a stack of simple types can have a maximum of five layers, from base to top-most.
    
-   In [cast expressions in CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm).
-   In [cast expressions in CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm).
    
    Note: Remember that casting in CDS projection views is only possible with the addition PRESERVING TYPE.
    
    Example: cast(ProjField as MySimpleType preserving type) as NewProjField
    
-   For [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) of elements in [CDS custom entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") and in [CDS abstract entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").
-   For [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) of parameters in [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS analytical projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry"), CDS custom entities, CDS abstract entities, and [CDS hierarchies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").
-   For typing of [CDS virtual elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") in [CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry").
-   For [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm) the input parameters or the return parameter of [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry").
-   In ABAP for typing data objects with the statement TYPE.

Restrictions

-   CDS simple types cannot be used in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
-   CDS simple types cannot be used for typing in DDIC objects such as [DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm), [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm "Glossary Entry"), and [DDIC extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extension_glosry.htm "Glossary Entry").
-   Unlike DDIC data elements, there is no [search help assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") available for CDS simple types.
-   CDS simple types cannot be used in [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry").

Hint

If a CDS DDIC-based views (obsolete) selects from a view entity that is typed with a simple type, then the simple type information is available in the metadata of the CDS entity, but not in the metadata of the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry").

Example - Evaluation of Annotations of a Simple Type

The following CDS simple type is based on a DDIC data element.

define type demo\_simple\_type\_de : demo\_destination;

The semantic information of the data element is inherited to the simple type and translated into annotations. These annotations and their values can be seen in the Active Annotations view in ADT:

![Figure](st_active_anno.jpg)

The class CL\_DEMO\_CDS\_SIMPLE\_TYPE demonstrates the following:

-   The data type and length of a CDS simple type can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") methods.
-   The annotations of the CDS simple type can be [evaluated](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

Example - Using Simple Types for Typing in a CDS View Entity

The following CDS view entity uses a CDS simple type for typing of parameters p1 and p2. It casts element cast\_bt into a simple type.

@AbapCatalog.viewEnhancementCategory: \[#NONE\]
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, simple types'
@Metadata.ignorePropagatedAnnotations: true
define view entity DEMO\_CDS\_SIMPLE\_TYPE\_USAGE
  with parameters
    p1 : demo\_simple\_type,
    p2 : abap.int4
  as select from demo\_expressions
{
  key id                                   as Id,
      num1                                 as Num1,
      char1,
      $parameters.p1                       as Parameter1,
      $parameters.p2                       as Parameter2,
      cast( char2 as demo\_simple\_type\_de ) as cast\_bt
}

The following code snippet demonstrates how the metadata of the CDS view entity can be evaluated using the class CL\_DD\_CDS\_READ\_API\_FACTORY. The tables that are generated as output have columns that indicate whether a field or parameter is typed with reference to a simple type.

DATA(o) = cl\_demo\_output=>new( ).
DATA:
  lo\_api\_entity TYPE REF TO if\_dd\_cds\_read\_api\_entity,
  lo\_api\_param  TYPE REF TO if\_dd\_cds\_read\_api\_parameter.
TRY.
    DATA(result) = cl\_dd\_cds\_read\_api\_factory=>create(
                     iv\_stobname = 'DEMO\_CDS\_SIMPLE\_TYPE\_USAGE' ).
    DATA(result\_header) = result->get\_header( ).
    lo\_api\_entity = CAST #( result ).
    lo\_api\_param = CAST #( result ).
    DATA(lt\_field) = lo\_api\_entity->get\_fields( ).
    DATA(lt\_param) = lo\_api\_param->get\_all( ).
  CATCH cx\_dd\_cds\_read\_api.
ENDTRY.
o->next\_section( 'Evaluation of the view fields'
)->write( lt\_field
)->next\_section( 'Evaluation of the view parameters'
)->write( lt\_param
)->display(  ).

Continue
[CDS TDL - CDS Simple Type, type\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_anno.htm)
[CDS TDL - CDS Simple Type, data\_element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dtel.htm)
[CDS TDL - CDS Simple Type, simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type.htm)
![Example](exa.gif "Example") [CDS TDL - Using a CDS Simple Type for Typing in ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_st_abexa.htm)