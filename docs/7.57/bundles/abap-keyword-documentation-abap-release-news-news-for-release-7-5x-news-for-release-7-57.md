# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.5x / News for Release 7.57

Included pages: 12


### abennews-757.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: News for Release 7.57, ABENNEWS-757, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

News for Release 7.57

The kernel release for Release 7.57 is 7.89.

-   [Assignments in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-assignments.htm)
-   [ABAP Dictionary in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-ddic.htm)
-   [Expressions and Functions in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-expressions.htm)
-   [Internal Tables in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-itab.htm)
-   [Data Clusters in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-data_cluster.htm)
-   [ABAP CDS in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-abap_cds.htm)
-   [Further Changes in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-others.htm)
-   [ABAP RESTful Application Programming Model in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-restful.htm)

Continue
[Assignments in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-assignments.htm)
[ABAP Dictionary in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-ddic.htm)
[Expressions and Functions in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-expressions.htm)
[Internal Tables in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-itab.htm)
[Data Clusters in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-data_cluster.htm)
[ABAP CDS in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-abap_cds.htm)
[Further Changes in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-others.htm)
[ABAP RESTful Application Programming Model in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-restful.htm)


### abennews-757-assignments.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments in Release 7.57, ABENNEWS-757-ASSIGNMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments in Release 7.57

[1\. New Dynamic Component Specification in ASSIGN](#!ABAP_MODIFICATION_1@1@)
[2\. New Addition ELSE UNASSIGN](#!ABAP_MODIFICATION_2@2@)

Modification 1   

New Dynamic Component Specification in ASSIGN

Components of structures can be assigned to field symbols with the new syntax [struc-(comp)](abapassign_dynamic_components.htm#!ABAP_ALTERNATIVE_1@1@) that largely replaces the variant ASSIGN COMPONENT OF.

Modification 2   

New Addition ELSE UNASSIGN

The new addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_else_unassign.htm) can be specified for the following variants of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm):

-   [dynamic assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_dobj.htm)
-   [assignments of dynamic components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm)
-   [dynamic access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_access.htm)
-   [assignment of a table expression](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_3@3@)

It can be also specified with the addition ASSIGNING of the following internal table statements:

-   [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm)
-   [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_result.htm)
-   [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_result.htm)

All these statements have in common to set sy-subrc. If an assignment is not successful, sy-subrc is set to a value 4 or sometimes 8. If the addition ELSE UNASSIGN is specified, the state of the field symbol is set to unassigned in that case. The field symbol is assigned only, if the assignment is successful. If ELSE UNASSIGN is not specified, the field symbol keeps its previous state, which was the only behavior up to now. Using ELSE UNASSIGN introduces the same behavior as for the [static variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_static_dobj.htm) to the above variants. In another way around, one can say that the static variant uses ELSE UNASSIGN implicitly.


### abennews-757-ddic.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Dictionary in Release 7.57, ABENNEWS-757-DDIC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Dictionary in Release 7.57

Modification

Deprecation of DDIC External Views

[SAP HANA XSA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsa_glosry.htm "Glossary Entry") replaces [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry"). The [access methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_access_xsc.htm) designed specifically for XSC objects are not suitable for XSA objects and have been declared obsolete. [DDIC external views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_external_views.htm) are one of those access methods. They have been declared obsolete. More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).


### abennews-757-expressions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Expressions and Functions in Release 7.57, ABENNEWS-757-EXPRESSIONS, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Expressions and Functions in Release 7.57

Modification

Inline Declarations

The new [declaration operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") [FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm) declares an [immutable variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenimmutable_variable_glosry.htm "Glossary Entry") that cannot be assigned another value at other write positions of the same context.


### abennews-757-itab.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables in Release 7.57, ABENNEWS-757-ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables in Release 7.57

[1\. New Addition STEP for Defining Step Size and Processing Order](#!ABAP_MODIFICATION_1@1@)
[2\. Exception when Mixing Index Access with Hash Key Access](#!ABAP_MODIFICATION_2@2@)
[3\. Correction for FROM Addition](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Addition STEP for Defining Step Size and Processing Order

The new addition STEP defines the step size and the order for processing an internal table. For the statements [LOOP](abaploop_at_itab_cond.htm#!ABAP_ADDITION_3@3@) and [FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_cond.htm), STEP can be used to control the step size and the processing order. For the statements [APPEND](abapappend_linespec.htm#!ABAP_ALTERNATIVE_3@3@), [DELETE](abapdelete_itab_lines.htm#!ABAP_ADDITION_3@3@), [INSERT](abapinsert_itab_linespec.htm#!ABAP_ALTERNATIVE_3@3@), [VALUE](abenvalue_constructor_params_lspc.htm#!ABAP_ALTERNATIVE_2@2@), and [NEW](abennew_constructor_params_lspc.htm#!ABAP_ALTERNATIVE_2@2@), STEP can only be used to define the step size. It is not possible to change the processing order with STEP for these statements.

Modification 2   

Exception when Mixing Index Access with Hash Key Access

Access to a [table index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_index_glosry.htm "Glossary Entry") when accessing an internal table using a [hash key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhash_key_glosry.htm "Glossary Entry") (accessing a [hashed table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhashed_table_glosry.htm "Glossary Entry") using its primary key or accessing any internal table using a hashed [secondary key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_key_glosry.htm "Glossary Entry")) is not allowed. When a hashed key is specified dynamically behind USING KEY in statement [LOOP AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) or expression [FOR ... IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm), usage of FROM and TO must result in an exception. This was not the case before release 7.57.

From release 7.57 on, the runtime error ITAB\_ILLEGAL\_INDEX\_OP occurs in such a situation. Before release 7.57, the behavior was undefined.

This change is slightly incompatible.

Modification 3   

Correction for FROM Addition

When a negative value is specified for FROM in statement [LOOP AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) or expression [FOR ... IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm), it is set to 1 implicitly. Before release 7.57, this was not the case in the following situation:

-   The internal table is accessed using a sorted key.
-   The internal table contains more than 10 table lines.
-   A WHERE condition is specified that can be [optimized](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_where_optimization.htm).

The loop was not processed at all. From release 7.57 on, the loop is processed as documented.

This change is slightly incompatible.


### abennews-757-data_cluster.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Clusters in Release 7.57, ABENNEWS-757-DATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Clusters in Release 7.57

Modification

Import of Type n into Type c

The statement [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm) now allows assignments of data of type [n to data objects of type c](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_parameterlist.htm) if they have the same length. This change might lead to incompatible behavior if handling of the former exception leads to different results than the new behavior.


### abennews-757-abap_cds.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

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

[CDS entity buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_buffer_glosry.htm "Glossary Entry") was enhanced: [View on view buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_buffering.htm) is now supported, under the precondition that the CDS view entity used as data source meets certain requirements.

Modification 2   

CDS View Entity, CASE ELSE NULL

In [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the addition [ELSE NULL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm) is available in simple and complex [case distinctions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm). It defines the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry") as return value of the ELSE branch.

Modification 3   

CDS View Entity, Extended Cast Matrix

New [casting options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) have been added in [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

-   Casting from data type FLTP into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data type SSTRING into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data type CHAR into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data type DATS into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data type TIMS into data types DEC, CURR, QUAN, INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34 is now possible.
-   Casting from data types DECFLOAT16 and DECFLOAT34 into data type CHAR is now possible.

Modification 4   

CDS View Entity, Table Buffering

[Table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") can be defined for [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") now:

-   Table buffering can be enabled and disabled with the annotation
    
    [@AbapCatalog.entityBuffer.definitionAllowed: true|false](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_buffering.htm)
    
-   The [buffering type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_type.htm) can be specified with a [CDS entity buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_buffer_glosry.htm "Glossary Entry") defined by
    
    [DEFINE VIW ENTITY BUFFER ON cds\_view\_entity ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity_buffer.htm)
    

Table buffering can be defined differently for the layers core, localization, industry, partner and customer.

Modification 5   

CDS View Entity, SUBSTRING Function

In [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the [SUBSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm) function has been enhanced. It now accepts not only literals, but also fields, parameters, expressions, and built-in functions as arguments pos and len.

Modification 6   

CDS View Entity, LEFT and RIGHT

In [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the functions [LEFT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm) and [RIGHT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm) have been enhanced. They now accept literals, fields, parameters, expressions, and built-in functions as argument len.

Modification 7   

CDS View Entity, Application Session Variables

In [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), two new [application session variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_var_application_v2.htm) are available:

-   [bs\_system\_id](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_var_application_v2.htm)
-   [bs\_zone\_id](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_var_application_v2.htm)

Modification 8   

ABAP Program That Lists Usages of CDS-Managed DDIC Views

Using [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") has been declared [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_obsolete.htm). The following ABAP program lists all [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") that use CDS-managed DDIC views:

RUT\_WHERE\_USE\_SQLVIEW.

Modification 9   

CDS Analytical Projection Views

[CDS analytical projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_analytical_query_apv.htm) for modelling analytical queries are available. A CDS analytical projection view is defined using [DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_analytical.htm). The value for the [provider contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) must be set to ANALYTICAL\_QUERY.

Modification 10   

CDS Transactional Interface

A new type of [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry") is available: the [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry"). CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") to provide the basis for a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). A CDS transactional interface view is defined using [DEFINE VIEW ENTITY AS PROJECTION ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_interface.htm). The value for the [provider contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) must be set to TRANSACTIONAL\_INTERFACE.

Modification 11   

Comparisons with CDS Amount Fields and CDS Quantity Fields

Special handling for [CDS amount fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field.htm) and [CDS quantity fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_field.htm) for [comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_types_v2.htm) in [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") has been implemented.

Modification 12   

Support of Input Parameters of Type abap.string

Data type abap.string is now supported for [input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm) in the [parameter list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_list_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and in the [parameter list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry").

Data type abap.string is now supported when [binding actual parameters to the input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_parameters_v2.htm) of a CDS view entity, if a CDS table function is used as [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm) after FROM.

Modification 13   

CDS Custom Entity Extensions

The new statement [EXTEND CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_extend_custom_entity.htm) of the DDL of ABAP CDS makes it possible to add new elements to existing [CDS custom entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") by using [CDS custom entity extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cus_entity_extend_glosry.htm "Glossary Entry").

Modification 14   

CDS DDIC-Based Views Are Obsolete

[CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), defined using the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm), are [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm). When creating new data models, [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), defined using [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm), should be used instead.


### abennews-757-others.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 7.57, ABENNEWS-757-OTHERS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 7.57

[1\. Support of ABAP Language Versions](#!ABAP_MODIFICATION_1@1@)
[2\. Obsolete Access Methods for SAP HANA XS](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Support of ABAP Language Versions

The [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions_obsolete.htm) [ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry")

-   [Static ABAP with restricted object use](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_static_restr_glosry.htm "Glossary Entry")
-   [Standard ABAP with restricted object use](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_restr_obj_glosry.htm "Glossary Entry")

are not supported any more and must no longer be used.

Modification 2   

Obsolete Access Methods for SAP HANA XS

[SAP HANA XSA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsa_glosry.htm "Glossary Entry") replaces [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry"). The [access methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_xsc_obsolete.htm) designed specifically for XSC objects are not suitable for XSA objects and have been declared obsolete. This includes [DDIC external views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_external_views.htm) and [database procedure proxies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry"). More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).


### abennews-757-restful.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP RESTful Application Programming Model in Release 7.57, ABENNEWS-757-RESTFUL, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP RESTful Application Programming Model in Release 7.57

In release 7.57, the [ABAP RESTful Application Programming Model (RAP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") was enhanced as follows:

-   [CDS BDL in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-cds_bdl.htm)
-   [ABAP EML in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-eml.htm)

Continue
[CDS BDL in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-cds_bdl.htm)
[ABAP EML in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-eml.htm)


### abennews-757-cds_bdl.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) →  [ABAP RESTful Application Programming Model in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-restful.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL in Release 7.57, ABENNEWS-757-CDS_BDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

CDS BDL in Release 7.57

[1\. RAP Late Numbering for Managed and for Draft-Enabled RAP BOs](#!ABAP_MODIFICATION_1@1@)
[2\. Instance-Bound Factory Actions for Managed RAP BOs](#!ABAP_MODIFICATION_2@2@)
[3\. BDEF Privileged Mode for RAP Projection BOs](#!ABAP_MODIFICATION_3@3@)
[4\. CDS Interface Behavior Definitions](#!ABAP_MODIFICATION_4@4@)
[5\. Managed RAP BO, New Field Characteristic](#!ABAP_MODIFICATION_5@5@)
[6\. Unmanaged RAP BO, New Field Characteristic](#!ABAP_MODIFICATION_6@6@)
[7\. Managed RAP BO, with full data](#!ABAP_MODIFICATION_7@7@)
[8\. Variants to Define a RAP Own Authorization Context](#!ABAP_MODIFICATION_8@8@)
[9\. BDEF Extensions for RAP BOs](#!ABAP_MODIFICATION_9@9@)
[10\. BDEF Extensions for RAP Projection BOs](#!ABAP_MODIFICATION_10@10@)
[11\. New Version of BDEF Strict Mode](#!ABAP_MODIFICATION_11@11@)

Modification 1   

RAP Late Numbering for Managed and for Draft-Enabled RAP BOs

[RAP late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) is now also available for managed RAP BOs, managed draft-enabled RAP BOs, and for unmanaged draft-enabled RAP BOs.

Modification 2   

Instance-Bound Factory Actions for Managed RAP BOs

[Instance-bound factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_factory.htm) are now also available for managed RAP BOs.

Modification 3   

BDEF Privileged Mode for RAP Projection BOs

A new syntax variant of [with privileged mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_privileged_mode.htm) is now available for RAP projection BOs.

Modification 4   

CDS Interface Behavior Definitions

A new [implementation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry") is available: the [CDS interface behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo_interface.htm). Such interface BDEFs are based on [CDS transactional interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") and define the behavior of a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). The overall purpose of a RAP BO interface is to project a business object for stable consumption.

Modification 5   

Managed RAP BO, New Field Characteristic

In [managed RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm). It removes the field in question from the [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") and from all RAP APIs.

Modification 6   

Unmanaged RAP BO, New Field Characteristic

In [unmanaged RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm). It removes the field in question from the [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") and from all RAP APIs.

Modification 7   

Managed RAP BO, with full data

In [managed RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), the optional addition [with full data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) can be used in combination with one of the [RAP saving options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) to ensure that full instance data is handed over to the save\_modified method of the RAP saver class in the ABAP behavior pool.

Modification 8   

Variants to Define a RAP Own Authorization Context

New variants are available for defining a [RAP own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_own_ac_glosry.htm "Glossary Entry"):

-   [define own authorization context by privileged mode;](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_own_auth_context.htm)
-   [define own authorization context by privileged mode and { ... }](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_own_auth_context.htm)

Modification 9   

BDEF Extensions for RAP BOs

[BDEF extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_extension_glosry.htm "Glossary Entry") for RAP BOs can be defined using the statement [extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm).

Modification 10   

BDEF Extensions for RAP Projection BOs

[BDEF projection extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projec_bdef_ext_glosry.htm "Glossary Entry") for [RAP projection business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") can be defined using the statement [extension for projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_projection.htm).

Modification 11   

New Version of BDEF Strict Mode

A new version of [BDEF strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") is available: Strict mode version 2, specified using [strict(2)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_2.htm). It applies even more syntax checks than the first version.


### abennews-757-eml.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) →  [ABAP RESTful Application Programming Model in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-restful.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML in Release 7.57, ABENNEWS-757-EML, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

ABAP EML in Release 7.57

Modification

Entity Manipulation Language

-   [RAISE ENTITY EVENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_entity_event.htm)
    
    It is now possible to raise a [RAP entity event](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") using this statement.
    
-   [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm) and [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm)
    
    The FIELDS ( ... ) WITH addition for [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities_fields.htm) and [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_fields.htm) supports the setting of %control regarding components in [deep input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_input_param.htm) in the context of deep [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_action_glosry.htm "Glossary Entry") and [function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_function_glosry.htm "Glossary Entry") parameters.


### abennews-757-restful.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP RESTful Application Programming Model in Release 7.57, ABENNEWS-757-RESTFUL, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP RESTful Application Programming Model in Release 7.57

In release 7.57, the [ABAP RESTful Application Programming Model (RAP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") was enhanced as follows:

-   [CDS BDL in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-cds_bdl.htm)
-   [ABAP EML in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-eml.htm)

Continue
[CDS BDL in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-cds_bdl.htm)
[ABAP EML in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-eml.htm)
