  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions_read.htm) → 

Functional Operand Positions

Functional operand positions are [reading positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry") in which suitable [data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry") and [functional method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") plus [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") and [table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry") whose return values or results have a suitable data type, can be specified. The following functional operand positions exist:

-   Functional operand positions in ABAP Objects

-   Operand oref of the statement
    [SET HANDLER ... FOR oref](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler_instance.htm).

-   Functional operand positions in relational expressions

-   Operand ref of the predicate expression
    [... ref IS *\[*NOT*\]* BOUND ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_bound.htm)

-   Functional operand positions in assignments

-   Operand struc1 of the statement
    [MOVE-CORRESPONDING struc1 TO ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding.htm)

-   Operand val of the statement
    [CLEAR ... WITH val](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclear.htm)

-   Function Operand Positions in String Processing and Byte String Processing

-   Character-like or byte-like arguments of the built-in functions
    [dbmaxlen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlength_functions.htm), [xstrlen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendescriptive_functions_binary.htm)

-   Operand itab of the statement
    [CONCATENATE LINES OF itab INTO ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconcatenate.htm)

-   Operand itab of the statement
    [FIND ... IN TABLE itab ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab.htm)

-   Function operand positions in statements for internal tables

-   Internal table itab of the statement
    [READ TABLE itab ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm)

-   Work area wa of the statement
    [READ TABLE ... FROM wa ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_key.htm)

-   Internal table itab of the statement
    [LOOP AT itab ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm)

-   Internal table jtab of the statement
    [INSERT LINES OF jtab INTO ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm)

-   Work area wa of the statement
    [COLLECT wa INTO ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm)

-   Internal table jtab of the statement
    [APPEND LINES OF jtab TO ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_linespec.htm)

-   Work area wa of the statement
    [DELETE TABLE ... FROM wa ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_key.htm)

-   Function operand positions in statements for time stamps

-   Operands time\_stamp and tz of the statement
    [CONVERT TIME STAMP time\_stamp TIME ZONE tz INTO...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm)

-   Operands dat, tim, dst, and tz of the statement
    [CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO ... TIME ZONE tz](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm)

-   Functional operand positions in message processing

-   Operand oref of the statement
    MESSAGE [oref](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_msg.htm) ...

-   Operands dobj1 to dobj4 of the statement
    MESSAGE ...[WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm)

-   Function operand positions in statements for checkpoints

-   Operands val1 val2 of the statement
    [ASSERT ... FIELDS val1 val2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassert.htm)

-   Operands val1 val2 ... of the statement
    [LOG-POINT ... FIELDS val1 val2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplog-point.htm)

Notes

-   Alongside the regular functional operand positions, three [extended functional operand positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_functional_positions.htm) exist that can be used to specify certain built-in functions. These operand positions are obsolete and should no longer be used.

-   Special functional operand positions are all places in which a [relational expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrelational_expression_glosry.htm "Glossary Entry") can be specified. A single [functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") can be specified as a [predicative method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") here. Other expressions (with the exception of [predicate functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_function_glosry.htm "Glossary Entry") or single data objects (with the exception of an [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_in_short_form.htm))), on the other hand, cannot be specified as [predicates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_glosry.htm "Glossary Entry") of a relational expression.

-   In any expressions in string templates embedded in the [formatting options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm), (dobj) and expr for fixed values (if specified) represent a summary functional operand position.

Example

Calls a functional method cl\_abap\_tstmp=>normalize in a functional operand position.

DATA ts TYPE timestamp.
...
CONVERT TIME STAMP cl\_abap\_tstmp=>normalize( ts ) TIME ZONE 'UTC'
        INTO DATE DATA(date) TIME DATA(time).