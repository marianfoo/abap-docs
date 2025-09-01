  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.57](javascript:call_link\('abennews-757.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS in Release 7.57, ABENNEWS-757-ABAP_CDS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP CDS in Release 7.57

[1\. CDS View Entity, Table Buffering](#!ABAP_MODIFICATION_1@1@)
[2\. CDS View Entity, CASE ELSE NULL](#!ABAP_MODIFICATION_2@2@)
[3\. CDS View Entity, Extended Cast Matrix](#!ABAP_MODIFICATION_3@3@)
[4\. CDS View Entity, Table Buffering](#!ABAP_MODIFICATION_4@4@)
[5\. CDS View Entity, SUBSTRING Function](#!ABAP_MODIFICATION_5@5@)
[6\. CDS View Entity, LEFT and RIGHT](#!ABAP_MODIFICATION_6@6@)
[7\. CDS View Entity, Application Session Variables](#!ABAP_MODIFICATION_7@7@)
[8\. ABAP Program That Lists Usages of CDS-Managed DDIC Views](#!ABAP_MODIFICATION_8@8@)
[9\. CDS Analytical Projection Views](#!ABAP_MODIFICATION_9@9@)
[10\. CDS Transactional Interface](#!ABAP_MODIFICATION_10@10@)
[11\. Comparisons with CDS Amount Fields and CDS Quantity Fields](#!ABAP_MODIFICATION_11@11@)
[12\. Support of Input Parameters of Type abap.string](#!ABAP_MODIFICATION_12@12@)
[13\. CDS Custom Entity Extensions](#!ABAP_MODIFICATION_13@13@)
[14\. CDS DDIC-Based Views Are Obsolete](#!ABAP_MODIFICATION_14@14@)

Modification 1   

CDS View Entity, Table Buffering

[CDS entity buffering](javascript:call_link\('abencds_entity_buffer_glosry.htm'\) "Glossary Entry") was enhanced: [View on view buffering](javascript:call_link\('abencds_v2_view_buffering.htm'\)) is now supported, under the precondition that the CDS view entity used as data source meets certain requirements.

Modification 2   

CDS View Entity, CASE ELSE NULL

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), the addition [ELSE NULL](javascript:call_link\('abencds_case_expression_v2.htm'\)) is available in simple and complex [case distinctions](javascript:call_link\('abencds_case_expression_v2.htm'\)). It defines the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") as return value of the ELSE branch.

Modification 3   

CDS View Entity, Extended Cast Matrix

New [casting options](javascript:call_link\('abencds_cast_expression_v2.htm'\)) have been added in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

-   Casting from data type FLTP into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data type SSTRING into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data type CHAR into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data type DATS into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data type TIMS into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data types DECFLOAT16 and DECFLOAT34 into data type CHAR is now possible.

Modification 4   

CDS View Entity, Table Buffering

[Table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") can be defined for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") now:

-   Table buffering can be enabled and disabled with the annotation
    
    [@AbapCatalog.entityBuffer.definitionAllowed: true|false](javascript:call_link\('abencds_v2_view_buffering.htm'\))
    
-   The [buffering type](javascript:call_link\('abenbuffer_type.htm'\)) can be specified with a [CDS entity buffer](javascript:call_link\('abencds_entity_buffer_glosry.htm'\) "Glossary Entry") defined by
    
    [DEFINE VIW ENTITY BUFFER ON cds\_view\_entity ...](javascript:call_link\('abencds_define_view_entity_buffer.htm'\))
    

Table buffering can be defined differently for the layers core, localization, industry, partner and customer.

Modification 5   

CDS View Entity, SUBSTRING Function

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), the [SUBSTRING](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)) function has been enhanced. It now accepts not only literals, but also fields, parameters, expressions, and built-in functions as arguments pos and len.

Modification 6   

CDS View Entity, LEFT and RIGHT

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), the functions [LEFT](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)) and [RIGHT](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)) have been enhanced. They now accept literals, fields, parameters, expressions, and built-in functions as argument len.

Modification 7   

CDS View Entity, Application Session Variables

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), two new [application session variables](javascript:call_link\('abencds_session_var_application_v2.htm'\)) are available:

-   [bs\_system\_id](javascript:call_link\('abencds_session_var_application_v2.htm'\))
-   [bs\_zone\_id](javascript:call_link\('abencds_session_var_application_v2.htm'\))

Modification 8   

ABAP Program That Lists Usages of CDS-Managed DDIC Views

Using [CDS-managed DDIC views](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") has been declared [obsolete](javascript:call_link\('abencds_access_obsolete.htm'\)). The following ABAP program lists all [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that use CDS-managed DDIC views:

RUT\_WHERE\_USE\_SQLVIEW.

Modification 9   

CDS Analytical Projection Views

[CDS analytical projection views](javascript:call_link\('abencds_analytical_query_apv.htm'\)) for modelling analytical queries are available. A CDS analytical projection view is defined using [DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_analytical.htm'\)). The value for the [provider contract](javascript:call_link\('abencds_pv_provider_contract.htm'\)) must be set to ANALYTICAL\_QUERY.

Modification 10   

CDS Transactional Interface

A new type of [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") is available: the [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry"). CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") to provide the basis for a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"). A CDS transactional interface view is defined using [DEFINE VIEW ENTITY AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_interface.htm'\)). The value for the [provider contract](javascript:call_link\('abencds_pv_provider_contract.htm'\)) must be set to TRANSACTIONAL\_INTERFACE.

Modification 11   

Comparisons with CDS Amount Fields and CDS Quantity Fields

Special handling for [CDS amount fields](javascript:call_link\('abencds_amount_field.htm'\)) and [CDS quantity fields](javascript:call_link\('abencds_quantity_field.htm'\)) for [comparisons](javascript:call_link\('abencds_cond_expr_types_v2.htm'\)) in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") has been implemented.

Modification 12   

Support of Input Parameters of Type abap.string

Data type abap.string is now supported for [input parameters](javascript:call_link\('abencds_f1_param.htm'\)) in the [parameter list](javascript:call_link\('abencds_parameter_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") and in the [parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

Data type abap.string is now supported when [binding actual parameters to the input parameters](javascript:call_link\('abencds_select_parameters_v2.htm'\)) of a CDS view entity, if a CDS table function is used as [data source](javascript:call_link\('abencds_data_source_v2.htm'\)) after FROM.

Modification 13   

CDS Custom Entity Extensions

The new statement [EXTEND CUSTOM ENTITY](javascript:call_link\('abencds_extend_custom_entity.htm'\)) of the DDL of ABAP CDS makes it possible to add new elements to existing [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") by using [CDS custom entity extensions](javascript:call_link\('abencds_cus_entity_extend_glosry.htm'\) "Glossary Entry").

Modification 14   

CDS DDIC-Based Views Are Obsolete

[CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), defined using the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)), are [obsolete](javascript:call_link\('abencds_v1_views.htm'\)). When creating new data models, [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), defined using [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)), should be used instead.