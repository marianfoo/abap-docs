  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenosql_stmt_logexp.htm'\)) → 

sql\_cond - (cond\_syntax)

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

Syntax

... (cond\_syntax) ...

Effect

A relational expression can be specified dynamically as a parenthesized data object cond\_syntax that contains the syntax of a logical expression [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) valid here or is initial when the statement is executed. The result of the relational expression (cond\_syntax) is determined by the result of the logical expression it contains. If cond\_syntax is initial when the statement is executed, the relational expression is true.

The data object cond\_syntax can be a character-like data object or a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a character-like row type. The syntax in cond\_syntax is not case-sensitive as in the static syntax. When specifying an internal table, the syntax can be distributed across multiple rows. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

The logical expression in cond\_syntax can be joined using AND or OR or negated using NOT and a dynamic logical expression (cond\_syntax) can be specified as a single relational expression of a composite logical expression. [Host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") are not allowed in dynamic logical expressions.

If a dynamic SQL condition (cond\_syntax) is used for a read, the content of cond\_syntax is evaluated once for each [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). Any changes made to the content of cond\_syntax in a SELECT loop or WITH loop are ignored by the relational expression.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or masked before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)).

Hints

-   It is also possible to evaluate an internal table specified after the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) of a [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") in a dynamic relational expression.

-   It is possible to check a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") in a dynamic relational expression.

-   If cond\_syntax is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is evaluated, and not the header line.

-   Dynamic relational expressions can also be created interactively using [dynamic selections](javascript:call_link\('abenfree_selections.htm'\)).

-   When a condition is specified dynamically, the syntax check can take place only at runtime. Therefore, specifying a relational expression at runtime requires more execution time than a corresponding specification specified in the program text.

-   The data objects specified in a dynamic condition should be declared in the same context, if possible, since searches in higher contexts at runtime are more time-consuming.

-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamic SQL conditions.

-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](javascript:call_link\('abencomment.htm'\)) and ["](javascript:call_link\('abencomment.htm'\)) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".

Comment characters placed within literals are, however, part of the literal.

-   In dynamic SQL conditions, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor was not yet executed.

-   When a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") is specified dynamically, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

Creation of a dynamic comparison from user input. In the case of incorrect syntax or incorrect semantics, exceptions are raised that are handled using the common superclass. Any [SQL injections](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry") are prevented by checks on the specified column name. If this were not the case, a user could, for example, enter "CARRID <> value OR CARRID" in the field column, producing a condition "CARRID <> value OR CARRID = value", which would be true regardless of the entry made in the field value.

DATA: column TYPE c LENGTH 30,
      value  TYPE c LENGTH 30.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = column
  )->add\_field( CHANGING field = value )->request( ).
TRY.
    cl\_abap\_dyn\_prg=>check\_column\_name( column ).
  CATCH cx\_abap\_invalid\_name.
    cl\_demo\_output=>display( 'Invalid column name' ).
    RETURN.
ENDTRY.
DATA(cond\_syntax) = column &&  \` = @value\`.
TRY.
    SELECT \*
           FROM spfli
           WHERE (cond\_syntax)
           INTO TABLE @DATA(spfli\_tab).
  CATCH cx\_sy\_dynamic\_osql\_error.
    cl\_demo\_output=>display( \`Wrong WHERE condition!\` ).
ENDTRY.

Example

The following creation of a dynamic WHERE condition by concatenating the values of user input as shown below is even more risky than the previous example. Any [SQL injections](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry") must be prevented by transforming quotation marks in the entry value. A user can, for example, enter "CARRID" in column and "LH' OR CARRID <> 'LH" in value, which would produce the always true condition "CARRID = 'LH' OR CARRID <> 'LH'" if the quotation marks were not transformed. After the conversion using the method QUOTE of the class CL\_ABAP\_DYN\_PRG, which also adds quotation marks at the beginning and end, the condition "CARRID = 'LH'' OR CARRID <> ''LH'" is created. The handling of consecutive quotation marks in [text field literals](javascript:call_link\('abenuntyped_character_literals.htm'\)) results in the column CARRID being compared exactly with the entered value, making the result of the condition always false.

DATA: column TYPE c LENGTH 30,
      value  TYPE c LENGTH 30.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = column
  )->add\_field( CHANGING field = value )->request( ).
TRY.
    cl\_abap\_dyn\_prg=>check\_column\_name( column ).
  CATCH cx\_abap\_invalid\_name.
    cl\_demo\_output=>display( 'Invalid column name' ).
    RETURN.
ENDTRY.
DATA(cond\_syntax) = column && \` = \` && cl\_abap\_dyn\_prg=>quote( value ).
TRY.
    SELECT \*
           FROM spfli
           WHERE (cond\_syntax)
           INTO TABLE @DATA(spfli\_tab).
  CATCH cx\_sy\_dynamic\_osql\_error.
    cl\_demo\_output=>display( \`Wrong WHERE condition!\` ).
ENDTRY.