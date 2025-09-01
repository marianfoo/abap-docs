  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Syntax Elements of an ABAP Program](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operand Positions](javascript:call_link\('abenoperand_positions.htm'\)) →  [Expression Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Read Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Functional Operand Positions, ABENFUNCTIONAL_POSITIONS, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Functional Operand Positions

Functional operand positions are [read positions](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry") that expect appropriate [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") and [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") or [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry"), as well as [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") and [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") whose return value or result has a suitable data type. The following functional operand positions exist:

-   Functional operand positions in ABAP Objects
    -   Operand oref of the statement
        
        [SET HANDLER ... FOR oref](javascript:call_link\('abapset_handler_instance.htm'\)).
        
-   Functional operand positions in relational expressions
    -   Operand ref of the predicate expression
        
        [... ref IS *\[*NOT*\]* BOUND ...](javascript:call_link\('abenlogexp_bound.htm'\))
        
-   Functional operand positions in assignments
    -   Operand struc1 of the statement
        
        [MOVE-CORRESPONDING struc1 TO ...](javascript:call_link\('abapmove-corresponding.htm'\))
        
    -   Operand val of the statement
        
        [CLEAR ... WITH val](javascript:call_link\('abapclear.htm'\))
        
-   Functional Operand Positions in String Processing and Byte String Processing
    -   Character-like or byte-like arguments of the built-in functions
        
        [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)), [xstrlen](javascript:call_link\('abendescriptive_functions_binary.htm'\))
        
    -   Operand itab of the statement
        
        [CONCATENATE LINES OF itab INTO ...](javascript:call_link\('abapconcatenate.htm'\))
        
    -   Operand itab of the statement
        
        [FIND ... IN TABLE itab ...](javascript:call_link\('abapfind_itab.htm'\))
        
-   Functional operand positions in statements for internal tables
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
        
-   Functional operand positions in statements for time stamps
    -   Operand tz of the statement
        
        [CONVERT UTCLONG time\_stamp TIME ZONE tz INTO...](javascript:call_link\('abapconvert_utclong.htm'\))
        
    -   Operands dat, tim, dst, and tz of the statement
        
        [CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO UTCLONG ... TIME ZONE tz](javascript:call_link\('abapconvert_date_utclong.htm'\))
        
    -   Operands time\_stamp and tz of the statement
        
        [CONVERT TIME STAMP time\_stamp TIME ZONE tz INTO ...](javascript:call_link\('abapconvert_time-stamp.htm'\))
        
    -   Operands dat, tim, dst, and tz of the statement
        
        [CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO TIME STAMP ... TIME ZONE tz](javascript:call_link\('abapconvert_date_time-stamp.htm'\))
        
-   Functional operand positions in message processing
    -   Operand oref of the statement
        
        MESSAGE [oref](javascript:call_link\('abapmessage_msg.htm'\)) ...
        
    -   Operands dobj1 to dobj4 of the statement
        
        MESSAGE ...[WITH dobj1 ... dobj4](javascript:call_link\('abapmessage.htm'\))
        
-   Functional operand positions in statements for checkpoints
    -   Operands val1 val2 of the statement
        
        [ASSERT ... FIELDS val1 val2 ...](javascript:call_link\('abapassert.htm'\))
        
    -   Operands val1 val2 ... of the statement
        
        [LOG-POINT ... FIELDS val1 val2 ...](javascript:call_link\('abaplog-point.htm'\))
        

Hints

-   In addition to the standard functional operand positions, there are three [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)) that can be used to specify certain built-in functions. These operand positions are obsolete and should not be used.
-   Special functional operand positions are all places in which a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") can be specified. Here, a single [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") can be specified as a [predicative method call](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry"). Other expressions with the exception of [predicate functions](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") or single data objects, again with the exception of an [obsolete short form](javascript:call_link\('abenlogexp_in_short_form.htm'\)), cannot be specified as [predicates](javascript:call_link\('abenpredicate_glosry.htm'\) "Glossary Entry") of a relational expression.
-   In the [formatting options](javascript:call_link\('abapcompute_string_format_options.htm'\)) of embedded expressions in string templates, the specification of (dobj) and expr for fixed values represents a combination of functional operand positions.

Example

Calls a functional method cl\_abap\_tstmp=>normalize in a functional operand position.

DATA ts TYPE timestamp.
...
CONVERT TIME STAMP cl\_abap\_tstmp=>normalize( ts ) TIME ZONE 'UTC'
        INTO DATE FINAL(date) TIME FINAL(time).