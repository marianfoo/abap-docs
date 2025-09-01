  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Reader Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

Functional Operand Positions

Functional operand positions are [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") in which suitable [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") and [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") or [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") plus [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") and [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") whose return values or results have a suitable data type, can be specified. The following functional operand positions exist:

-   Functional operand positions in ABAP Objects:

-   Operand oref of the statement
    [SET HANDLER ... FOR oref](javascript:call_link\('abapset_handler_instance.htm'\)).

-   Functional operand positions in relational expressions:

-   Operand ref of the predicate expression
    [... ref IS *\[*NOT*\]* BOUND ...](javascript:call_link\('abenlogexp_bound.htm'\))

-   Functional operand positions in assignments:

-   Operand struc1 of the statement
    [MOVE-CORRESPONDING struc1 TO ...](javascript:call_link\('abapmove-corresponding.htm'\))

-   Operand val of the statement
    [CLEAR ... WITH val](javascript:call_link\('abapclear.htm'\))

-   Functional operand positions in string processing and byte string processing

-   Character-like or byte-like arguments of the predefined functions
    [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)), [xstrlen](javascript:call_link\('abendescriptive_functions_binary.htm'\))

-   Operand itab of the statement
    [CONCATENATE LINES OF itab INTO ...](javascript:call_link\('abapconcatenate.htm'\))

-   Operand itab of the statement
    [FIND ... IN TABLE itab ...](javascript:call_link\('abapfind_itab.htm'\))

-   Functional operand positions in statements for internal tables:

-   Internal table itab of the statement
    [READ TABLE itab ...](javascript:call_link\('abapread_table.htm'\))

-   Work area wa of the statement
    [READ TABLE ... FROM wa ...](javascript:call_link\('abapread_table_key.htm'\))

-   Internal table itab of the statement
    [LOOP AT itab ...](javascript:call_link\('abaploop_at_itab.htm'\))

-   Internal table jtab of the statement
    [INSERT LINES OF jtab INTO ...](javascript:call_link\('abapinsert_itab_linespec.htm'\))

-   Work area wa of the statement
    [COLLECT wa INTO ...](javascript:call_link\('abapcollect.htm'\))

-   Internal table jtab of the statement
    [APPEND LINES OF jtab TO ...](javascript:call_link\('abapappend_linespec.htm'\))

-   Work area wa of the statement
    [DELETE TABLE ... FROM wa ...](javascript:call_link\('abapdelete_itab_key.htm'\))

-   Functional operand positions in statements for time stamps:

-   Operands time\_stamp and tz of the statement
    [CONVERT TIME STAMP time\_stamp TIME ZONE tz INTO...](javascript:call_link\('abapconvert_time-stamp.htm'\))

-   Operands dat, tim, dst, and tz of the statement
    [CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO ... TIME ZONE tz](javascript:call_link\('abapconvert_date_time-stamp.htm'\))

-   Functional operand positions in message processing:

-   Operand oref of the statement
    MESSAGE [oref](javascript:call_link\('abapmessage_msg.htm'\)) ...

-   Operands dobj1 to dobj4 of the statement
    MESSAGE ...[WITH dobj1 ... dobj4](javascript:call_link\('abapmessage.htm'\))

-   Functional operand positions in statements for checkpoints:

-   Operands val1 val2 of the statement
    [ASSERT ... FIELDS val1 val2 ...](javascript:call_link\('abapassert.htm'\))

-   Operands val1 val2 ... of the statement
    [LOG-POINT ... FIELDS val1 val2 ...](javascript:call_link\('abaplog-point.htm'\))

Notes

-   Alongside the regular functional operand positions, three [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)) exist that can be used to specify certain predefined functions. These operand positions are obsolete and should no longer be used.

-   Special functional operand positions are all places in which a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") can be specified. A single [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") can be specified as a [predicative method call](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry") here. Other expressions (with the exception of [predicate functions](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") or single data objects (with the exception of an [obsolete short form](javascript:call_link\('abenlogexp_in_short_form.htm'\)))), on the other hand, cannot be specified as [predicates](javascript:call_link\('abenpredicate_glosry.htm'\) "Glossary Entry") of a relational expression.

-   In any expressions in string templates embedded in the [formatting options](javascript:call_link\('abapcompute_string_format_options.htm'\)), (dobj) and expr for fixed values (if specified) represent a summary functional operand position.

Example

Calls a functional method cl\_abap\_tstmp=>normalize in a functional operand position.

DATA ts TYPE timestamp.
...
CONVERT TIME STAMP cl\_abap\_tstmp=>normalize( ts ) TIME ZONE 'UTC'
        INTO DATE DATA(date) TIME DATA(time).