  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - Common DDL Elements](javascript:call_link\('abencds_ddl_common_elements.htm'\)) → 

CDS DDL - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot *|* ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_parameter_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")
-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")
-   [Parameter list](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\)) of a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry")
-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")
-   [Parameter list](javascript:call_link\('abencds_parameter_list_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and exposed CDS associations of the current CDS entity. In table functions, the reserved name connection cannot be used. All reserved names that cannot be used are specified in the DDIC database table TRESE. The evaluation of names is not case-sensitive. Blanks spaces in the comma-separated parameter list are ignored and can be omitted.

Each parameter must be typed with an elementary data type. All data types listed in topic [Typing](javascript:call_link\('abencds_typing.htm'\)) are allowed, except for abap.accp, abap.geom\_ewkb, abap.rawstring, and abap.string.

A [non-SQL CDS entity](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry") for which CDS parameters are defined as input parameters can be used as

-   data source or in a path expression of a different [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")
-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_select_parameters_v2.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equal sign (\=) is used instead of a colon (:).

Hint

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition   

... @parameter\_annot *|* ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") but not for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry"), and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

Example

The example shows a CDS view entity with one CDS parameter called P\_MyParameter.

@AbapCatalog.sqlViewName: 'DEMO\_PARAM'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'SDDL: Interface (BO) View for BuPa'
define root view DEMO\_SALES\_CDS\_SO\_PARAM
  with parameters
    P\_MyParameter : abap.char( 5 )
  as select from
    demo\_sales\_bupa as bupa
    {
      key id,
          given\_name,
          middle\_name,
          family\_name,
          $parameters.P\_MyParameter as my\_parameter
    }

Continue
[CDS DDL - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))