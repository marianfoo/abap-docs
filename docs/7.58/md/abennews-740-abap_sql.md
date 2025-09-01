  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

ABAP SQL in ABAP Release 7.40, SP02

[1\. Optimized Table Buffering](#!ABAP_MODIFICATION_1@1@)
[2\. Result Type of the Aggregate Function COUNT( \* )](#!ABAP_MODIFICATION_2@2@)
[3\. Decimal Places in the INTO Clause](#!ABAP_MODIFICATION_3@3@)
[4\. Conditions in Outer Joins](#!ABAP_MODIFICATION_4@4@)
[5\. Enhancements for Sorting by Primary Key](#!ABAP_MODIFICATION_5@5@)
[6\. Handling Strings](#!ABAP_MODIFICATION_6@6@)
[7\. Field Symbols and Data Reference Variables in SELECT Loops](#!ABAP_MODIFICATION_7@7@)
[8\. Specifying Dynamic Tokens](#!ABAP_MODIFICATION_8@8@)
[9\. Stricter Checks on Syntax Rules](#!ABAP_MODIFICATION_9@9@)

Modification 1   

Optimized Table Buffering

The following improvements were made:

-   [Table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") was optimized so that, if the database table is specified statically, its [secondary indexes](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") are also respected when data is read from the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") (in cases where generic buffering or full buffering is activated).
-   If SELECT is used with [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)), [table buffering](javascript:call_link\('abensap_puffering.htm'\)) is now also used when accessing tables with single record buffering and is no longer bypassed.

Modification 2   

Result Type of the Aggregate Function COUNT( \* )

In cases where the aggregate function [COUNT( \* )](javascript:call_link\('abapselect_aggregate.htm'\)) or [COUNT(\*)](javascript:call_link\('abapselect_aggregate.htm'\)) is specified as the only element in the SELECT list and without a GROUP BY clause, INT8 was added to the internal data type of the result. If the value range is to be used in full, a target object with the data type p or decfloat34 must be used after [INTO](javascript:call_link\('abapinto_clause.htm'\)). The system field sy-dbcnt is set to the value -1 in events outside its value range.

Modification 3   

Decimal Places in the INTO Clause

The [assignment rules](javascript:call_link\('abenselect_into_conversion.htm'\)) of the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) were modified so that surplus decimal places are now always cut off when numbers are assigned to target fields with too few decimal places. Until now, it was possible to round the numbers (depending on the database and table buffering).

Modification 4   

Conditions in Outer Joins

The restriction in previous versions, which meant that only equality comparisons (\=, EQ) were possible in the ON condition of [outer joins](javascript:call_link\('abapselect_join.htm'\)), no longer applies.

Modification 5   

Enhancements for Sorting by Primary Key

If the addition PRIMARY KEY is used after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)), the following restrictions no longer apply:

-   If individual columns are specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), it is not necessary to specify the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") explicitly if the addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) is used.
-   A [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") can also be specified statically after FROM, provided that the view contains fewer key fields than view fields.
-   The addition PRIMARY KEY can now also be specified dynamically.

Modification 6   

Handling Strings

The following (previously undocumented) restrictions were lifted:

-   Before ABAP release 7.40 SP02, it was not possible to use [DISTINCT \*](javascript:call_link\('abapselect_clause.htm'\)) to read database tables containing short strings of type SSTRING.
-   Before ABAP release 7.40, SP02, it was not possible to access database tables with short or long strings of the data types SSTRING, STRING, or RAWSTRING using \* in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) in cases where a join is specified dynamically after [FROM](javascript:call_link\('abapfrom_clause.htm'\)).

Modification 7   

Field Symbols and Data Reference Variables in SELECT Loops

When field symbols or dereferenced reference variables are specified for the work area, individual data objects, or internal tables in a SELECT loop after [INTO](javascript:call_link\('abapinto_clause.htm'\)), the data object that is the target of a field symbol or reference variable is identified exactly once, from ABAP release 7.40, SP02, when the loop is entered. This data object is used as a target area in each loop pass. Any modifications to the assignment of a field symbol or reference variable within the loop are ignored. From ABAP release 7.40, SP02, the assignment of a field symbol or reference variable is determined again for each loop pass and the current data object is used as the target area.

Modification 8   

Specifying Dynamic Tokens

With ABAP release 7.40 SP02 and higher, internal tables, which are specified as dynamic tokens of statement [SELECT](javascript:call_link\('abapselect.htm'\)), can also have secondary keys.

Modification 9   

Stricter Checks on Syntax Rules

In ABAP release 7.40 SP02, a new SQL parser was introduced for ABAP SQL. These parser performs stricter checks on some rules than the old parser. More specifically, the same parser is now used for statically specified ABAP SQL and for the content of dynamic tokens. In ABAP release 7.40, SP02, this parser will initially only be used for the statement [SELECT](javascript:call_link\('abapselect.htm'\)). One consequence of this is that any following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

-   General corrections
    -   From ABAP release 7.40, SP02, the content of the operand n of the additions [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) and [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) meet the rules of a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") for the data type i.
    -   Before ABAP release 7.40, SP02, the operator [IN range\_tab](javascript:call_link\('abenwhere_logexp_seltab.htm'\)) of a WHERE condition was not always checked statically to see whether the columns LOW and HIGH of the ranges table range\_tab could be converted to the data type of the database and non-convertible columns did not produce a runtime error in cases where the ranges table was empty. Now, a static check is always made a non-convertible columns always raise an exception.
        
        Example
        
        From ABAP release 7.40 SP02, syntax errors for:
        
        DATA: range\_tab TYPE RANGE OF t,
              itab TYPE TABLE OF sflight.
        SELECT \*
               FROM sflight
               INTO TABLE itab
               WHERE fldate IN range\_tab.
        
    -   Before ABAP release 7.40, SP02, multiple [NOT](javascript:call_link\('abenwhere_logexp_andornot.htm'\)) operators could be placed consecutively in a WHERE condition. An even or odd number of consecutive NOT operators is the same as no NOT or a single NOT, which means that surplus NOT operators can now no longer be specified.
        
        Example
        
        From ABAP release 7.40 SP02, syntax errors for:
        
        SELECT SINGLE \*
               FROM spfli
               INTO wa WHERE
               NOT NOT carrid = 'LH'.
        
    -   Before ABAP release 7.40 SP02, it was possible to read the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") when using alias names defined with [AS](javascript:call_link\('abapfrom_clause.htm'\)) or [joins](javascript:call_link\('abapfrom_clause.htm'\)) in ON and WHERE conditions, without disabling [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) using [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)). In this case, the result set is empty whenever the explicitly specified client is not the current client. From ABAP release 7.40 SP02, this situation produces a syntax check warning.
        
        Example
        
        From ABAP release 7.40 SP02, syntax warnings for:
        
        SELECT \*
               FROM scarr AS carriers
               INTO TABLE itab
               WHERE carriers~mandt = '...'.
        
        and
        SELECT \*
               FROM scarr
               INNER JOIN spfli
               on scarr~mandt = spfli~mandt
               INTO CORRESPONDING FIELDS OF TABLE itab
               WHERE scarr~mandt = '...'.
        
    -   The addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) cannot be specified for [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") and [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry"). Before ABAP release 7.40 SP02, it was possible to specify a column dynamically after GROUP BY; however this always raised an exception. From ABAP release 7.40 SP02, a dynamically specified GROUP BY clause in pooled tables and cluster tables produces a syntax warning; this warning will become a syntax error in a future SP.
        
        Example
        
        From ABAP release 7.40 SP02, a syntax warning or error for:
        
        SELECT id object langu typ
               FROM doktl
               INTO TABLE itab
               GROUP BY (\`ID OBJECT LANGU TYP\`).
        
-   Corrections for Dynamic Tokens
    -   Before ABAP release 7.40 SP02, a single period (.) could be specified in the dynamic tokens of any ABAP SQL statements. This period was ignored when the token was evaluated at runtime. From ABAP release 7.40 SP02, a period like this raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SYNTAX.
        
        Example
        
        From ABAP release 7.40 SP02, exception for:
        
        SELECT \*
               FROM (\`SPFLI .\`)
               INTO TABLE itab
               WHERE (\`. CARRID = 'LH'\`).
        
    -   Before ABAP release 7.40, SP02, an alias name could be given more than once in cases where columns were specified dynamically in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the columns after SELECT using column\_syntax, even though this is not allowed statically. From ABAP release 7.40 SP02, this raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS.
        
        Example
        
        From ABAP release 7.40 SP02, exception for:
        
        SELECT SINGLE ('carrid AS col carrname AS col')
               FROM scarr
               INTO CORRESPONDING FIELDS OF wa
               WHERE carrid = 'LH'.
        
    -   Before ABAP release 7.40, SP02 the statically compulsory addition DISTINCT could be omitted when the aggregate function [COUNT( DISTINCT col )](javascript:call_link\('abapselect_aggregate.htm'\)) was specified dynamically and all rows of the result set were counted. From ABAP release7.40 SP02, the omission of DISTINCT raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SYNTAX.
        
        Example
        
        From ABAP release 7.40 SP02, exception for:
        SELECT ('COUNT( carrid )')
               FROM spfli
               INTO count.
        ENDSELECT.
        
    -   In previous releases (before 7.40 SP02), a NOT could be mistakenly written directly in front of a comparison operator in a dynamic WHERE condition (which is not possible in the static case). With ABAP release 7.40 SP02 and higher, this raises an exception of class CX\_SY\_DYNAMIC\_OSQL\_SYNTAX.
        
        Example
        
        From ABAP release 7.40 SP02, exception for:
        
        SELECT SINGLE \*
               FROM spfli
               INTO wa
               WHERE (\`carrid NOT = 'LH'\`).
        
    -   Before ABAP release 7.40, SP02 it was possible to use (incorrectly) a dynamic FROM clause combined with the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)) to access [DDIC projection views](javascript:call_link\('abenddic_proj_view_glosry.htm'\) "Glossary Entry") containing the same number of key fields and view fields, which is not possible in static cases. From ABAP release 7.40, SP02, this raises the exception CX\_SY\_DYNAMIC\_OSQL\_SYNTAX.
        
        Example
        
        From ABAP release 7.40, SP02, an exception is raised when projection\_view has the same number of key fields and view fields.
        
        DATA itab TYPE TABLE OF projection\_view.
        SELECT \*
               FROM ('KELLERH\_VIEW')
               INTO TABLE itab
               ORDER BY PRIMARY KEY.
        
-   Corrections for the aggregate function count( \* )
    -   As in all aggregate functions, the target field must be chosen appropriately in the case of [count( \* )](javascript:call_link\('abapselect_aggregate.htm'\)) or [count(\*)](javascript:call_link\('abapselect_aggregate.htm'\)) and no values must be lost when the result is assigned. This was not checked before ABAP release 7.40 SP02, and assignments were made in accordance with the conversions rules. This did not always raise an exception when values were lost. From ABAP release 7.40 SP02, the target field must be numeric and a loss of values always produces an exception.
        
        Example
        
        From ABAP release 7.40 SP02, a syntax warning and exception (if the value does not fit in the target field) for:
        
        DATA cnt TYPE c LENGTH 1.
        SELECT COUNT(\*)
               FROM scarr
               INTO cnt.
        
    -   When individual columns or [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) are specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), an explicit work area must usually be specified and the obsolete short form is not possible. The only exception here is when count( \* ) is used to specify nothing, if no alias name and no GROUP BY clause was specified. Before ABAP release 7.40 SP02, the short form using count( \* ), specified together with an alias name or a GROUP BY clause, produced a runtime error. From ABAP release 7.40 SP02, this also produces a syntax error if known statically.
        
        Example
        
        From ABAP release 7.40 SP02, syntax errors for:
        
        TABLES scarr.
        SELECT COUNT( \* ) AS cnt
               FROM scarr.
        SELECT count( \* )
               FROM scarr
               GROUP BY carrid.
           ...
        ENDSELECT.
        
-   Corrections when using the built-in types [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)) and [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) from ABAP Dictionary.
    -   Columns of the types LCHR and LRAW cannot be used in [relational expressions](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) of the [SQL conditions](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)). Before ABAP release 7.40 SP02, this produced a runtime error. From ABAP release 7.40 SP02, this also produces a syntax error if known statically.
        
        Example
        
        From ABAP release 7.40 SP02, syntax errors for:
        
        SELECT SINGLE \*
               FROM  indx
               INTO wa
               WHERE clustd = '...'.
        
    -   Columns of the types LCHR and LRAW cannot be read using SELECT if the addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) is specified. Before ABAP release 7.40 SP02, this produced a runtime error. From ABAP release 7.40 SP02, this also produces a syntax error if known statically.
        
        Example
        
        From ABAP release 7.40 SP02, syntax errors for:
        
        SELECT DISTINCT \*
               FROM  indx
               INTO TABLE itab.
        
    -   Columns of the types LCHR and LRAW can be read using SELECT only if they are read together with the associated length fields. Before ABAP release 7.40 SP02, columns of this type read without length fields produced a syntax warning. From ABAP release 7.40 SP02, this situation always produces a runtime error.
        
        Example
        
        From ABAP release 7.40 SP02, runtime errors for:
        
        SELECT clustd
               FROM  indx
               INTO TABLE itab.
        
-   Corrections for FOR ALL ENTRIES
    -   If [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is used in front of a WHERE condition of a SELECT statement, a column of the internal table must be specified in at least one comparison (the comparison can also be specified in a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry")). Before ABAP release 7.40 SP02, the subquery was not checked. From ABAP release 7.40 SP02, the comparison must be specified (statically or dynamically) even if a subquery is specified.
        
        Example
        
        From ABAP release 7.40 SP02, syntax errors for:
        
        SELECT carrid connid fldate
               FROM sflight
               INTO CORRESPONDING FIELDS OF TABLE rtab
               FOR ALL ENTRIES IN itab
               WHERE EXISTS ( SELECT \* FROM sflight ).
        
    -   When [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is used in front of a WHERE condition of a SELECT statement, no database fields of the built-in types STRING and RAWSTRING plus LCHR and LRAW can occur in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), since the implicit addition DISTINCT cannot be passed to the database system in this case. From ABAP release 7.40, SP02, a syntax warning occurs in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry"). This warning can be hidden by a pragma.
        
        Example
        
        From ABAP release 7.40 SP02, pragma required for:
        
        SELECT \*
              FROM snwd\_bpa
              INTO TABLE bupas
              FOR ALL ENTRIES IN orders
              WHERE node\_key = orders-buyer\_guid
              ##select\_fae\_with\_lob\[web\_address\].
        
    -   If [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is used in front of a WHERE condition of a SELECT statement, no [LOB handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)) can be created in the target area, since this produces an undefined result. Before ABAP release 7.40 SP02, this was not identified correctly for [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry"), either statically or at runtime. From ABAP release 7.40 SP02, this produces a syntax error or raises an exception.
        
        Example
        
        From ABAP release 7.40 SP02, syntax errors for:
        
        SELECT picture
               FROM demo\_blob\_table
               INTO wa-picture
               FOR ALL ENTRIES IN name\_tab
               WHERE name = name\_tab-table\_line.
        ENDSELECT.
        
    -   The addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) should not be used with the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)). The addition GROUP BY is ignored if used together with FOR ALL ENTRIES. From ABAP release 7.40 SP02, this situation produces a syntax check warning.
        
        Example
        
        From ABAP release 7.40 SP02, syntax warning for:
        
        SELECT COUNT( \* )
               FROM spfli
               INTO cnt
               FOR ALL ENTRIES IN carriers
               WHERE carrid = carriers-table\_line
               GROUP BY carrid.
        
-   Corrections for ORDER BY
    -   Before ABAP release 7.40 SP02, it was possible to specify any text between a dynamically specified column after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) and the closing period of a SELECT statement and this text was ignored when the statement was executed. Before ABAP release 7.40 SP02, this text produced a syntax warning; from ABAP release 7.40 SP02, it produces a syntax error.
        
        Example
        
        From ABAP release 7.40 SP02, syntax warning for:
        
        SELECT \*
               FROM scarr
               INTO TABLE itab
               ORDER BY (\`CARRID\`) carrname and so on.
        
    -   If the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) is specified together with [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)), all columns of the primary key must be read; if not, the result is undefined. From ABAP release 7.40 SP02, a syntax warning is produced in this case if known statically; at runtime, an exception is always raised.
        
        Example
        
        From ABAP release 7.40 SP02, a syntax warning or exception for:
        
        SELECT carrid connid
               FROM sflight
               INTO CORRESPONDING FIELDS OF TABLE rtab
               FOR ALL ENTRIES IN itab
               WHERE carrid = itab-carrid AND
                     connid = itab-connid
               ORDER BY PRIMARY KEY.
        
    -   If [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") are specified after SELECT, all columns that are specified after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) and that do not have an alias name for an aggregation function must also be specified after SELECT and after GROUP BY. Before ABAP release 7.40 SP02, the checks on this situation at runtime were not strict enough and the behavior was platform-dependent. From ABAP release 7.40 SP02, a violation of this rule always raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS.
        
        Example
        
        From ABAP release 7.40 SP02, an exception from the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS for:
        
        SELECT COUNT( \* )
               FROM spfli
               INTO (cnt)
               GROUP BY ('CARRID')
               ORDER BY ('CARRID').
          ...
        ENDSELECT.
        
    -   An alias name in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) cannot be the name of a column to which no alias name is assigned. Before ABAP release 7.40 SP02, the use of a name of this type after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) raised an exception. From ABAP release 7.40 SP02, this also produces a syntax error if known statically.
        
        Example
        
        From ABAP release 7.40 SP02, syntax errors for:
        
        SELECT carrid connid AS carrid
               FROM spfli
               INTO TABLE itab
               ORDER BY carrid.