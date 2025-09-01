---
title: "Functional Operand Positions"
description: |
  Functional operand positions are read positions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm 'Glossary Entry') that expect appropriate data objects(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_object_glosry.htm 'Glossary Entry') a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_positions.htm"
abapFile: "abenfunctional_positions.htm"
keywords: ["insert", "delete", "loop", "do", "if", "try", "method", "data", "internal-table", "abenfunctional", "positions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Functional Operand Positions, ABENFUNCTIONAL_POSITIONS, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Functional Operand Positions

Functional operand positions are [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry") that expect appropriate [data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_object_glosry.htm "Glossary Entry") and [functional method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry"), as well as [constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") and [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") whose return value or result has a suitable data type. The following functional operand positions exist:

-   Functional operand positions in ABAP Objects
    -   Operand oref of the statement
        
        [SET HANDLER ... FOR oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_handler_instance.htm).
        
-   Functional operand positions in relational expressions
    -   Operand ref of the predicate expression
        
        [... ref IS *\[*NOT*\]* BOUND ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_bound.htm)
        
-   Functional operand positions in assignments
    -   Operand struc1 of the statement
        
        [MOVE-CORRESPONDING struc1 TO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm)
        
    -   Operand val of the statement
        
        [CLEAR ... WITH val](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm)
        
-   Functional Operand Positions in String Processing and Byte String Processing
    -   Character-like or byte-like arguments of the built-in functions
        
        [dbmaxlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlength_functions.htm), [xstrlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescriptive_functions_binary.htm)
        
    -   Operand itab of the statement
        
        [CONCATENATE LINES OF itab INTO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate.htm)
        
    -   Operand itab of the statement
        
        [FIND ... IN TABLE itab ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab.htm)
        
-   Functional operand positions in statements for internal tables
    -   Internal table itab of the statement
        
        [READ TABLE itab ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm)
        
    -   Work area wa of the statement
        
        [READ TABLE ... FROM wa ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_key.htm)
        
    -   Internal table itab of the statement
        
        [LOOP AT itab ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm)
        
    -   Internal table jtab of the statement
        
        [INSERT LINES OF jtab INTO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_linespec.htm)
        
    -   Work area wa of the statement
        
        [COLLECT wa INTO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm)
        
    -   Internal table jtab of the statement
        
        [APPEND LINES OF jtab TO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend_linespec.htm)
        
    -   Work area wa of the statement
        
        [DELETE TABLE ... FROM wa ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab_key.htm)
        
-   Functional operand positions in statements for time stamps
    -   Operand tz of the statement
        
        [CONVERT UTCLONG time\_stamp TIME ZONE tz INTO...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_utclong.htm)
        
    -   Operands dat, tim, dst, and tz of the statement
        
        [CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO UTCLONG ... TIME ZONE tz](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_date_utclong.htm)
        
    -   Operands time\_stamp and tz of the statement
        
        [CONVERT TIME STAMP time\_stamp TIME ZONE tz INTO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_time-stamp.htm)
        
    -   Operands dat, tim, dst, and tz of the statement
        
        [CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO TIME STAMP ... TIME ZONE tz](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_date_time-stamp.htm)
        
-   Functional operand positions in message processing
    -   Operand oref of the statement
        
        MESSAGE [oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_msg.htm) ...
        
    -   Operands dobj1 to dobj4 of the statement
        
        MESSAGE ...[WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm)
        
-   Functional operand positions in statements for checkpoints
    -   Operands val1 val2 of the statement
        
        [ASSERT ... FIELDS val1 val2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassert.htm)
        
    -   Operands val1 val2 ... of the statement
        
        [LOG-POINT ... FIELDS val1 val2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplog-point.htm)
        

Hints

-   In addition to the standard functional operand positions, there are three [extended functional operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_functional_positions.htm) that can be used to specify certain built-in functions. These operand positions are obsolete and should not be used.
-   Special functional operand positions are all places in which a [relational expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelational_expression_glosry.htm "Glossary Entry") can be specified. Here, a single [functional method call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") can be specified as a [predicative method call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry"). Other expressions with the exception of [predicate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_function_glosry.htm "Glossary Entry") or single data objects, again with the exception of an [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_in_short_form.htm), cannot be specified as [predicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_glosry.htm "Glossary Entry") of a relational expression.
-   In the [formatting options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm) of embedded expressions in string templates, the specification of (dobj) and expr for fixed values represents a combination of functional operand positions.

Example

Calls a functional method cl\_abap\_tstmp=>normalize in a functional operand position.

DATA ts TYPE timestamp.
...
CONVERT TIME STAMP cl\_abap\_tstmp=>normalize( ts ) TIME ZONE 'UTC'
        INTO DATE FINAL(date) TIME FINAL(time).