  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.58](javascript:call_link\('abennews-758.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.58%2C%20ABENNEWS-758-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL in ABAP Release 7.58

[1\. ABAP SQL Expressions on the Right Side](#!ABAP_MODIFICATION_1@1@)
[2\. New Cardinality Syntax for Joins](#!ABAP_MODIFICATION_2@2@)
[3\. Access to Multiple Internal Tables](#!ABAP_MODIFICATION_3@3@)
[4\. New Addition PRIVILEGED ACCESS](#!ABAP_MODIFICATION_4@4@)

Modification 1   

ABAP SQL Expressions on the Right Side

[ABAP SQL expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)) can be defined on the right side of a condition enclosed in parentheses.

Modification 2   

New Cardinality Syntax for Joins

A new syntax for specifying the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") is available:

*{*MANY *|* ONE *|* *{*EXACT ONE*}**}* TO *{*MANY *|* ONE *|* *{*EXACT ONE*}**}*

This syntax allows specifying a [source](javascript:call_link\('abensource_cardinality_glosry.htm'\) "Glossary Entry") and a [target cardinality](javascript:call_link\('abentarget_cardinality_glosry.htm'\) "Glossary Entry"), while the previously available numeric syntax only allowed specifying the target cardinality. The new cardinality syntax can be used to improve query performance. It can also be used in [SQL path expressions](javascript:call_link\('abenabap_sql_path_filter.htm'\)) and [CTE associations](javascript:call_link\('abapwith_associations_defining.htm'\)).

Modification 3   

Access to Multiple Internal Tables

It is now possible to process multiple internal tables accessed with [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) within one ABAP SQL statement with the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry"). Currently, this is restricted to joins of internal tables where no database tables are involved.

Modification 4   

New Addition PRIVILEGED ACCESS

With the new addition [PRIVILEGED ACCESS](javascript:call_link\('abapselect_privileged_access.htm'\)), [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") can be disabled for a complete SELECT statement.