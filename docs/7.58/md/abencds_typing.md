  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - Common DDL Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_common_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20typing%2C%20ABENCDS_TYPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - typing

Syntax

... dtype *|* data\_element *|* cds\_type  ...

Effect

Types elements or parameters of [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry"). The following is typed:

-   Elements of CDS entities:
    -   Elements of the element list [element\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_return_list.htm) in a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry").
    -   Elements of the element list [element\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element_list.htm) in a [CDS custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").
    -   Elements of the element list [element\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_absent_element_list.htm) of a [CDS abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").
    -   [Typed literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typed_literal_v2.htm) in a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").
    -   [CDS virtual elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") in a [CDS projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry").
-   Input parameters of CDS entities
    -   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v2.htm) in a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry")
    -   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_apv.htm) in a [CDS analytical projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry")
    -   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_func_parameter_list.htm) in a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry").
    -   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_hiera_parameter_list.htm) in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").
    -   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_parameter_list.htm) in an [CDS custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").
    -   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_parameter_list.htm) in an [CDS abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").
    -   Input parameters of the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v1.htm) in a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry")

Typing can be specified as follows:

-   Using a built-in data type from ABAP Dictionary. The addition PRESERVING TYPE cannot be specified in this case. All available data types are listed in the topic [ABAP CDS - Overview of Built-In DDIC Types That Can Be Used in ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_overview_builtin_types.htm).
-   Using the name of a [CDS user-defined type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") cds\_type.
-   Using the name of a [DDIC data element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry") data\_element.

Hint

Currently, only elementary data types are supported and no structured or tabular parameters.

Example

The following CDS view entity has two input parameters. p\_date is typed with the CDS simple type DEMO\_BT\_DATE and p\_num is typed with the built-in data type DEC with a specified length and number of decimal places.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_PARAMETER\_TYPE\_VE
  with parameters
    p\_date :DEMO\_BT\_DATE,
    p\_num  :abap.dec( 10, 3 )
  as select from demo\_expressions
{
  key id,
      $parameters.p\_date       as col\_date,
      $parameters.p\_num + dec3 as col\_num
};

The class CL\_DEMO\_CDS\_PARAMETER\_TYPE accesses the view using the following SELECT statement:

SELECT id, col\_date, col\_num
       FROM demo\_cds\_parameter\_type\_ve( p\_date = @sy-datlo,
                                        p\_num  = '1.234' )
       INTO TABLE @DATA(result).