  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete ABAP SQL](javascript:call_link\('abenabap_sql_obsolete.htm'\)) →  [Obsolete Syntax in ABAP SQL](javascript:call_link\('abenabap_sql_syntax_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Blank-Separated%20Lists%2C%20ABENABAP_SQL_LISTS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Blank-Separated Lists

The following lists of an ABAP SQL statement can still be specified with blanks as separators instead of commas, unless one of the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check applies from ABAP release 7.40, SP05.

-   In the statement [SELECT](javascript:call_link\('abapselect.htm'\)).
    -   When columns or aggregation functions are specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).
        
        ... *{*[col\_spec1](javascript:call_link\('abapselect_clause_col_spec.htm'\)) *\[*AS a1*\]* [col\_spec2](javascript:call_link\('abapselect_clause_col_spec.htm'\)) *\[*AS a2*\]* ... *}*
        
    -   When columns are specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\))
        
        ... GROUP BY col1 col2 ...
        
    -   When columns are specified after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\))
        
        ... ORDER BY *{*col1*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]*
                     *{*col2*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]*
                     ...
        
-   In the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)):
    -   When change expressions are specified after [SET](javascript:call_link\('abapupdate_source.htm'\))
        
        ... SET [set\_expression1](javascript:call_link\('abapupdate_set_expression.htm'\)) [set\_expression2](javascript:call_link\('abapupdate_set_expression.htm'\)) ...
        

These specifications are obsolete. Lists should always be separated by commas.

Example

SELECT statement with blank-separated lists.

SELECT carrid connid
       FROM spfli
       INTO (carrid, connid)
       WHERE carrid = carrid AND
             connid = connid
       ORDER BY carrid connid.

Recommended format with comma-separated lists, which forces the use of the escape character @ in front of [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)).

SELECT carrid, connid
       FROM spfli
       WHERE carrid = @carrid AND
             connid = @connid
       ORDER BY carrid, connid
       INTO (@carrid, @connid).