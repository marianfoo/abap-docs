# ABAP - Keyword Documentation / ABAP - Reference / ABAP Syntax / ABAP Statements / Operands / Functions and Expressions in Operand Positions

Included pages: 14



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenoperands_expressions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_expressions.htm)
- [abenfunctions_expressions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctions_expressions.htm)
- [abenexpression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm)
- [abenexpression_positions_write.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_write.htm)
- [abendeclaration_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_positions.htm)
- [abenresult_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresult_positions.htm)
- [abenexpression_positions_read.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_read.htm)
- [abengeneral_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expression_positions.htm)
- [abennumeric_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_expression_positions.htm)
- [abenstring_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_positions.htm)
- [abenfunctional_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_positions.htm)

**Bundle Contains**: 11 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.428Z

---

### abenoperands_expressions.htm

> **📖 Official SAP Documentation**: [abenoperands_expressions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_expressions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) → 

Functions and Expressions in Operand Positions

[Functions](javascript:call_link\('abenfunction_glosry.htm'\) "Glossary Entry") and [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") can be specified in certain [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry").

-   [Functions and Expressions for Operand Positions](javascript:call_link\('abenfunctions_expressions.htm'\))

-   [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\))

Note

The program DEMO\_EXPRESSIONS shows examples of how functions and expressions are used.

Continue
[Functions and Expressions for Operand Positions](javascript:call_link\('abenfunctions_expressions.htm'\))
[Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\))



**📖 Source**: [abenoperands_expressions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_expressions.htm)

### abenfunctions_expressions.htm

> **📖 Official SAP Documentation**: [abenfunctions_expressions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctions_expressions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) → 

Functions and Expressions for Operand Positions

-   [Writing Positions](#abenfunctions-expressions-1--------reading-positions---@ITOC@@ABENFUNCTIONS_EXPRESSIONS_2)

Writing Positions

The following expressions can be specified in [writing positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"):

-   [Declaration expressions](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry")

-   ... [DATA(...)](javascript:call_link\('abendata_inline.htm'\)) ...

-   ... [FIELD-SYMBOL(...)](javascript:call_link\('abenfield-symbol_inline.htm'\)) ...

-   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry")

-   The [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") [NEW class( ... )->attr](javascript:call_link\('abennew_constructor_params_class.htm'\)) and [CAST type( ... )->dobj](javascript:call_link\('abenconstructor_expression_cast.htm'\))

-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)) and their [chainings](javascript:call_link\('abentable_exp_chaining.htm'\))

Reading Positions

The following functions can be specified in [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"):

-   [Predefined functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry")
    ... [func( arg )](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) ...
    ... [func( val = arg p1 = arg1 p2 = arg2 ... )](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) ...
    

-   [Functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry")
    ... [meth( )](javascript:call_link\('abapcall_method_functional.htm'\)) ...
    ... [meth( a )](javascript:call_link\('abapcall_method_functional.htm'\)) ...
    ... [meth( p1 = a1 p2 = a2 ... )](javascript:call_link\('abapcall_method_functional.htm'\)) ...
    ... [meth( *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*](javascript:call_link\('abapcall_method_functional.htm'\))
              [*\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*](javascript:call_link\('abapcall_method_functional.htm'\))
              [*\[*CHANGING   p1 = a1 p2 = a2 ...*\]* )](javascript:call_link\('abapcall_method_functional.htm'\)) ...
    

-   [Method chaining](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry")
    

-   Chained method call:
    ... [...->meth1( ... )->meth2( ... )->...->meth( ... )](javascript:call_link\('abapcall_method_static_chain.htm'\)) ...
    

-   Chained attribute access:
    ... [...->meth1( ... )->meth2( ... )->...->attr](javascript:call_link\('abapcall_method_static_chain.htm'\)) ...

The following expressions can be specified in reading positions:

-   [Calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"):

-   [Arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")
    ... [arith\_exp](javascript:call_link\('abapcompute_arith.htm'\)) ...
    

-   [Bit expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")
    ... [bit\_exp](javascript:call_link\('abapcompute_bit.htm'\)) ...
    

-   [String expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry")
    ... [string\_exp](javascript:call_link\('abapcompute_string.htm'\)) ...

-   [Constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"):

-   [Instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry")
    [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\))
    

-   [Value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry")
    [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\))
    

-   [Conversion operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry")
    [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\))
    

-   [Component operator](javascript:call_link\('abencorresponding_operator_glosry.htm'\) "Glossary Entry")
    [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\))
    

-   [Casting operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry")
    [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\))
    

-   [Reference operator](javascript:call_link\('abenreference_operator_glosry.htm'\) "Glossary Entry")
    [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\))
    

-   [Lossless operator](javascript:call_link\('abenlossless_operator_glosry.htm'\) "Glossary Entry")
    [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\))
    

-   [Reduction operator](javascript:call_link\('abenreduce_operator_glosry.htm'\) "Glossary Entry")
    [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\))
    

-   [Filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry")
    [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\))
    

-   [Conditional operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry")
    [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)), [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\))

-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)) and their [Chainings](javascript:call_link\('abentable_exp_chaining.htm'\))

Notes

-   Functions with numeric return values and arithmetic expressions are combined as [numeric expressions](javascript:call_link\('abennumerical_expression_glosry.htm'\) "Glossary Entry").

-   Functions with character-like return values and string expressions are combined as [character-like expressions](javascript:call_link\('abencharlike_expression_glosry.htm'\) "Glossary Entry").

-   Functions with a byte-like return values and bit expressions are combined as [byte-like expressions](javascript:call_link\('abenbyte_like_expression_glosry.htm'\) "Glossary Entry").

Example

Numeric expression as an index specified for an internal table.

DATA: itab TYPE STANDARD TABLE OF i,
      n    TYPE i.
...
READ TABLE itab INDEX lines( itab ) - n
                INTO  DATA(wa).



**📖 Source**: [abenfunctions_expressions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctions_expressions.htm)

### abenexpression_positions.htm

> **📖 Official SAP Documentation**: [abenexpression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) → 

Operand Positions for Functions and Expressions

-   [Writer Positions](javascript:call_link\('abenexpression_positions_write.htm'\))

-   [Reader Positions](javascript:call_link\('abenexpression_positions_read.htm'\))

Continue
[Writing Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_write.htm'\))
[Reader Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\))



**📖 Source**: [abenexpression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm)

### abenexpression_positions_write.htm

> **📖 Official SAP Documentation**: [abenexpression_positions_write.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_write.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) → 

Writing Positions for Functions and Expressions

[Writing positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry") are operand positions in which the operand is written to.

-   [Declaration Positions](javascript:call_link\('abendeclaration_positions.htm'\))

-   [Result Positions](javascript:call_link\('abenresult_positions.htm'\))

Continue
[Declaration Positions](javascript:call_link\('abendeclaration_positions.htm'\))
[Result Positions](javascript:call_link\('abenresult_positions.htm'\))



**📖 Source**: [abenexpression_positions_write.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_write.htm)

### abendeclaration_positions.htm

> **📖 Official SAP Documentation**: [abendeclaration_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_positions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Writing Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_write.htm'\)) → 

Declaration Positions

Declaration positions are [writing-only positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry") in which a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry") can be specified for an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry"). There are no declaration positions within expressions.

The following declaration positions are possible:

-   Positions for the inline declaration of variables with [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). These are the following [writing positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"), where the operand type can be determined in full and where the content of the operand is completely overwritten but not evaluated.

-   Left side of an assignment with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\))
    [lhs = ...](javascript:call_link\('abenequals_operator.htm'\))

-   Actual parameters for output parameters and return values of methods for [standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)):
    meth( [IMPORTING p1 = a1 p2 = a2...](javascript:call_link\('abapcall_method_parameters.htm'\))
          [RECEIVING r  =  a](javascript:call_link\('abapcall_method_parameters.htm'\)) )
    If a method call is on the right side of an assignment or is part of an expression, these actual parameters are not declaration positions.

-   Target fields when catching an exception:
    CATCH EXCEPTION [INTO oref](javascript:call_link\('abapcatch_try.htm'\))
    CLEANUP [INTO oref](javascript:call_link\('abapcleanup.htm'\))

-   Target fields in statements for string processing and byte string processing:
    FIND ... [MATCH COUNT mcnt](javascript:call_link\('abapfind_options.htm'\))
             [MATCH OFFSET moff](javascript:call_link\('abapfind_options.htm'\))
             [MATCH LENGTH mlen](javascript:call_link\('abapfind_options.htm'\))
             [RESULTS result\_tab*|*result\_wa](javascript:call_link\('abapfind_options.htm'\))
             [SUBMATCHES s1 s2 ...](javascript:call_link\('abapfind_options.htm'\))
    REPLACE  ... [REPLACEMENT COUNT rcnt](javascript:call_link\('abapreplace_options.htm'\))
                [REPLACEMENT OFFSET moff](javascript:call_link\('abapreplace_options.htm'\))
                [REPLACEMENT LENGTH mlen](javascript:call_link\('abapreplace_options.htm'\))
                [RESULTS result\_tab*|*result\_wa](javascript:call_link\('abapreplace_options.htm'\))
    CONCATENATE ... [INTO result](javascript:call_link\('abapconcatenate.htm'\))
    SPLIT ... [INTO result1 result2 ...](javascript:call_link\('abapsplit.htm'\))
              [INTO TABLE result\_tab](javascript:call_link\('abapsplit.htm'\))
    CONVERT TEXT ... [INTO SORTABLE CODE hex](javascript:call_link\('abapconvert_text.htm'\))
    GET BIT ... [INTO val](javascript:call_link\('abapget_bit.htm'\)).

-   Target fields in statements for time stamps:
    GET TIME STAMP [time\_stamp](javascript:call_link\('abapget_time-stamp.htm'\))
    CONVERT TIME STAMP ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](javascript:call_link\('abapconvert_time-stamp.htm'\))
    CONVERT ... [INTO TIME STAMP time\_stamp](javascript:call_link\('abapconvert_date_time-stamp.htm'\))

-   Target fields in statements for internal tables:
    READ TABLE ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapread_table_outdesc.htm'\))
    LOOP AT ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abaploop_at_itab_result.htm'\))
    INSERT ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapinsert_itab_result.htm'\))
    COLLECT    ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapcollect_itab_result.htm'\))
    APPEND     ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapappend_result.htm'\))
    MODIFY ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapmodify_itab_result.htm'\))
    FIND ... IN TABLE [MATCH COUNT mcnt](javascript:call_link\('abapfind_itab_options.htm'\))
             IN TABLE [MATCH LINE mlin](javascript:call_link\('abapfind_itab_options.htm'\))
             IN TABLE [MATCH OFFSET moff](javascript:call_link\('abapfind_itab_options.htm'\))
             IN TABLE [MATCH LENGTH mlen](javascript:call_link\('abapfind_itab_options.htm'\))
             IN TABLE [RESULTS result\_tab*|*result\_wa](javascript:call_link\('abapfind_itab_options.htm'\))
             IN TABLE [SUBMATCHES s1 s2 ...](javascript:call_link\('abapfind_itab_options.htm'\))
    REPLACE  ... IN TABLE [REPLACEMENT COUNT rcnt](javascript:call_link\('abapreplace_itab_options.htm'\))
                IN TABLE [REPLACEMENT LINE rlin](javascript:call_link\('abapreplace_itab_options.htm'\))
                IN TABLE [REPLACEMENT OFFSET moff](javascript:call_link\('abapreplace_itab_options.htm'\))
                IN TABLE [REPLACEMENT LENGTH mlen](javascript:call_link\('abapreplace_itab_options.htm'\))
             IN TABLE [RESULTS result\_tab*|*result\_wa](javascript:call_link\('abapreplace_itab_options.htm'\))

-   Target fields of the Open SQL statement SELECT:
    SELECT ... [INTO (dobj1, dobj2, ... )](javascript:call_link\('abapinto_clause.htm'\))
    SELECT ... [INTO wa](javascript:call_link\('abapinto_clause.htm'\))
    SELECT ... [INTO TABLE itab](javascript:call_link\('abapinto_clause.htm'\))

-   Target fields of the statement DESCRIBE:
    DESCRIBE FIELD ... [TYPE typ *\[*COMPONENTS com*\]* LENGTH ilen DECIMALS dec](javascript:call_link\('abapdescribe_field.htm'\))
                       [OUTPUT-LENGTH olen HELP-ID hlp EDIT MASK mask](javascript:call_link\('abapdescribe_field.htm'\))
    DESCRIBE TABLE ... [KIND knd LINES lin OCCURS n](javascript:call_link\('abapdescribe_table.htm'\))
    DESCRIBE DISTANCE ... [INTO dst](javascript:call_link\('abapdescribe_distance.htm'\))

-   Target fields of various GET statements:
    GET PARAMETER ... [FIELD dobj](javascript:call_link\('abapget_parameter.htm'\))
    GET PF-STATUS [status](javascript:call_link\('abapget_pf.htm'\))
    GET REFERENCE [INTO dref](javascript:call_link\('abapget_reference.htm'\))
    GET RUN TIME FIELD [rtime](javascript:call_link\('abapget_run_time.htm'\))
    GET TIME [FIELD tim](javascript:call_link\('abapget_time.htm'\))
    

-   Work area in statement for dynpros:
    LOOP AT SCREEN ... [INTO wa](javascript:call_link\('abaploop_at_screen.htm'\))

-   Target field for message output:
    MESSAGE ... [INTO text](javascript:call_link\('abapmessage.htm'\))

-   Target fields in file interface statements:
    READ DATASET ... [LENGTH alen](javascript:call_link\('abapread_dataset.htm'\))
    GET DATASET ... [POSITION pos](javascript:call_link\('abapget_dataset.htm'\)) [ATTRIBUTES attr](javascript:call_link\('abapget_dataset.htm'\))
    

-   Target field for a serialization:
    CALL TRANSFORMATION ... [RESULT XML rxml](javascript:call_link\('abapcall_transformation.htm'\))

-   All writing positions used when generating programs:
    GENERATE GENERATE SUBROUTINE POOL ... [NAME prog](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) [error\_handling](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))

-   Positions for the inline declaration of field symbols with [FIELD-SYMBOL(<fs>)](javascript:call_link\('abenfield-symbol_inline.htm'\)). These are all places where a memory area can be assigned to a field symbol.

-   Field symbol in the statement ASSIGN:
    ASSIGN... [TO <fs>](javascript:call_link\('abapassign.htm'\))

-   Field symbols in statements for internal tables:
    READ TABLE ... [ASSIGNING <fs>](javascript:call_link\('abapread_table_outdesc.htm'\))
    LOOP AT ... [ASSIGNING <fs>](javascript:call_link\('abaploop_at_itab_result.htm'\))
    INSERT ... [ASSIGNING <fs>](javascript:call_link\('abapinsert_itab_result.htm'\))
    COLLECT    ... [ASSIGNING <fs>](javascript:call_link\('abapcollect_itab_result.htm'\))
    APPEND     ... [ASSIGNING <fs>](javascript:call_link\('abapappend_result.htm'\))
    MODIFY ... [ASSIGNING <fs>](javascript:call_link\('abapmodify_itab_result.htm'\))

Note

Unlike in [standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)), in a [functional method call](javascript:call_link\('abapcall_method_functional.htm'\)) inline declarations cannot be specified as actual parameters for output parameters.

Example

Declaration expression [DATA](javascript:call_link\('abendata_inline.htm'\)) for declaring an internal table itab after the addition [INTO TABLE](javascript:call_link\('abapinto_clause.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).



**📖 Source**: [abendeclaration_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_positions.htm)

### abenresult_positions.htm

> **📖 Official SAP Documentation**: [abenresult_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresult_positions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Writing Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_write.htm'\)) → 

Result Positions

Result positions are [writing positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry") in which [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified. Writes are performed on the result of the expression. The following result positions are possible:

-   Left side of an assignment with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\))

-   Operand dobj of the statement [CLEAR](javascript:call_link\('abapclear.htm'\))

-   Memory area mem\_area of the statement [ASSIGN mem\_area TO](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\))

-   Structure struc of the statement [ASSIGN COMPONENT comp OF STRUCTURE struc](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\))

-   Actual parameter in [method calls](javascript:call_link\('abenmethod_calls.htm'\)) for [output parameters](javascript:call_link\('abapcall_method_parameters.htm'\)), [input/output parameters](javascript:call_link\('abapcall_method_parameters.htm'\)), and [return values](javascript:call_link\('abapcall_method_parameters.htm'\))

-   The right side in the declaration of a local field symbol in a [LET expression](javascript:call_link\('abaplet.htm'\))

Example

Uses a table expression itab\[ sy-index \] on the left side of an assignment.

DATA itab TYPE TABLE OF i.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
DO 3 TIMES.
  itab\[ sy-index \] = itab\[ sy-index \] \* 10.
ENDDO.



**📖 Source**: [abenresult_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresult_positions.htm)

### abenexpression_positions_write.htm

> **📖 Official SAP Documentation**: [abenexpression_positions_write.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_write.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) → 

Writing Positions for Functions and Expressions

[Writing positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry") are operand positions in which the operand is written to.

-   [Declaration Positions](javascript:call_link\('abendeclaration_positions.htm'\))

-   [Result Positions](javascript:call_link\('abenresult_positions.htm'\))

Continue
[Declaration Positions](javascript:call_link\('abendeclaration_positions.htm'\))
[Result Positions](javascript:call_link\('abenresult_positions.htm'\))



**📖 Source**: [abenexpression_positions_write.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_write.htm)

### abenexpression_positions_read.htm

> **📖 Official SAP Documentation**: [abenexpression_positions_read.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_read.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) → 

Reader Positions for Functions and Expressions

-   [General Expression Positions](javascript:call_link\('abengeneral_expression_positions.htm'\))

-   [Numeric Expression Positions](javascript:call_link\('abennumeric_expression_positions.htm'\))

-   [Character-Like Expression Positions](javascript:call_link\('abenstring_expression_positions.htm'\))

-   [Functional Operand Positions](javascript:call_link\('abenfunctional_positions.htm'\))

Continue
[General Expression Positions](javascript:call_link\('abengeneral_expression_positions.htm'\))
[Numeric Expression Positions](javascript:call_link\('abennumeric_expression_positions.htm'\))
[Character-Like Expression Positions](javascript:call_link\('abenstring_expression_positions.htm'\))
[Functional Operand Positions](javascript:call_link\('abenfunctional_positions.htm'\))



**📖 Source**: [abenexpression_positions_read.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_read.htm)

### abengeneral_expression_positions.htm

> **📖 Official SAP Documentation**: [abengeneral_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expression_positions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Reader Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

General Expression Positions

General expression positions are [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") in which suitable [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"), [predefined functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry"), or [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") can be specified. The following general expression positions exist:

-   Right side of an assignment with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\))

-   Operands of [arithmetic expressions](javascript:call_link\('abapcompute_arith.htm'\)) and of [bit expressions](javascript:call_link\('abapcompute_bit.htm'\))

-   [Embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\))

-   Operands of [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") in [logical expressions](javascript:call_link\('abenlogexp.htm'\))

-   Operand of the statement [CASE](javascript:call_link\('abapcase.htm'\))

-   [Actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)) for input parameters of methods in [meth( ... )](javascript:call_link\('abapcall_method_parameters.htm'\)), [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)), [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)), and [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\))

-   [Actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)) for input parameters of function modules in the case of [CALL FUNCTION](javascript:call_link\('abapcall_function_parameter.htm'\))

-   Arguments of [predefined](javascript:call_link\('abenbuilt_in_functions.htm'\)) [numeric functions](javascript:call_link\('abenmathematical_functions.htm'\)) if they are themselves executed in an arithmetic expression

-   Reference variable oref of statement [RAISE EXCEPTION oref.](javascript:call_link\('abapraise_exception_class.htm'\))

-   The operands behind the addition WITH TABLE KEY of the statements [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) and [DELETE TABLE itab](javascript:call_link\('abapdelete_itab_line.htm'\))

-   The operands behind the addition [WITH KEY](javascript:call_link\('abapread_table_free.htm'\)) of the statement [READ TABLE itab](javascript:call_link\('abapread_table.htm'\))

-   Work area wa of the following statements:

-   [APPEND wa TO ...](javascript:call_link\('abapappend_linespec.htm'\))

-   [INSERT wa INTO ...](javascript:call_link\('abapinsert_itab_linespec.htm'\))

-   [MODIFY ... FROM wa ...](javascript:call_link\('abapmodify_itab_single.htm'\))

-   Expression exp for dynamic sorts in the case of the following:

-   [SORT itab BY exp](javascript:call_link\('abapsort_itab.htm'\))

-   Source fields of the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) and [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)), with the restriction that [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") cannot be specified directly and can be specified only as [embedded expressions](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") in [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry")

The type restrictions defined by the [operand type](javascript:call_link\('abendata_objects_usage.htm'\)) apply in the operand positions. For example, no [numeric functions](javascript:call_link\('abenmathematical_funktion_glosry.htm'\) "Glossary Entry") can be specified in a bit expression.

Notes

-   Specifying [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") as actual parameters of methods enables the nesting of method calls in an operand position.

-   The three types of [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") can be executed as operands of relational expressions, but they cannot be mixed in one calculation expression.

Example

Specifies a constructor expressions with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) on the right side of an assignment and specifies a constructor expression with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) as an input parameter for the method DISPLAY of the class CL\_DEMO\_OUTPUT.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ).
cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR <wa> IN itab
                 NEXT s = s &&  <wa> && \` \` ) ).



**📖 Source**: [abengeneral_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expression_positions.htm)

### abennumeric_expression_positions.htm

> **📖 Official SAP Documentation**: [abennumeric_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_expression_positions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Reader Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

Numeric Expression Positions

Numeric expression positions are [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") in which [numeric data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), and [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry"), or [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") whose return value has a [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), can be specified. The following numeric expression positions exist:

-   Arguments of functions

-   Numeric arguments of [string functions](javascript:call_link\('abenstring_functions.htm'\))

-   Numeric arguments of [extremum functions](javascript:call_link\('abennmax_nmin_functions.htm'\))

-   Counters and positions:

-   Operand comp of the statement
    [ASSIGN COMPONENT comp OF STRUCTURE](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\))

-   Operand n of the statement
    [DO n TIMES](javascript:call_link\('abapdo.htm'\))

-   Operand sec of the statement
    [WAIT UP TO sec SECONDS](javascript:call_link\('abapwait_up_to.htm'\))

-   Operand num of the statement
    [SHIFT ... BY num PLACES](javascript:call_link\('abapshift_places.htm'\))

-   Operands bitpos and val of the statement
    [SET BIT bitpos ... TO val](javascript:call_link\('abapset_bit.htm'\)).

-   Operand bitpos of the statement
    [GET BIT bitpos ...](javascript:call_link\('abapget_bit.htm'\)).

-   Positions specified in the statements FIND and REPLACE:

-   Operands off and len of the statements
    [FIND ... IN SECTION ... OF](javascript:call_link\('abapfind_section_of.htm'\))
    [REPLACE ... IN SECTION ... OF](javascript:call_link\('abapfind_section_of.htm'\))

-   Operands lin1, off1, lin2, and off2 of the statements
    [FIND ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](javascript:call_link\('abapfind_table_range.htm'\))
    [REPLACE  ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](javascript:call_link\('abapreplace_table_range.htm'\))

-   Operands off and len of the statement
    [REPLACE SECTION OFFSET off LENGTH len OF ...](javascript:call_link\('abapreplace_in_position.htm'\))

-   The row number idx specified with respect to a table index when accessing an internal table in the following:

-   [READ TABLE itab INDEX idx ...](javascript:call_link\('abapread_table_index.htm'\))

-   [LOOP AT itab ...FROM idx1 TO idx2 ...](javascript:call_link\('abaploop_at_itab_cond.htm'\))

-   [INSERT itab ... INDEX idx ...](javascript:call_link\('abapinsert_itab_position.htm'\))

-   [INSERT LINES OF jtab FROM idx1 TO idx2  ...](javascript:call_link\('abapinsert_itab_linespec.htm'\))

-   [APPEND LINES OF jtab FROM idx1 TO idx2  ...](javascript:call_link\('abapappend_linespec.htm'\))

-   [MODIFY itab INDEX idx  ...](javascript:call_link\('abapmodify_itab_index.htm'\))

-   [DELETE itab INDEX idx  ...](javascript:call_link\('abapdelete_itab_line.htm'\))

-   [DELETE itab FROM idx1 TO idx2 ...](javascript:call_link\('abapdelete_itab_lines.htm'\))

Example

Specifies a built-in function lines( itab ) for specifying the loop passes of a [DO](javascript:call_link\('abapdo.htm'\)) loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
DO lines( itab ) TIMES.
  ...
ENDDO.



**📖 Source**: [abennumeric_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_expression_positions.htm)

### abenstring_expression_positions.htm

> **📖 Official SAP Documentation**: [abenstring_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_positions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Reader Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

Character-Like Expression Positions

Character-like expression positions are [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") in which [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry"), and [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") can be specified, as well as [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") whose return values have a [character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry"). The following character-like expression positions exist:

-   Operand positions in [string expressions](javascript:call_link\('abapcompute_string.htm'\))

-   Character-like arguments in [processing functions](javascript:call_link\('abenprocess_functions.htm'\))

-   Character-like arguments in [description functions](javascript:call_link\('abendescriptive_functions.htm'\))

-   Operand comp of the statement
    [ASSIGN COMPONENT comp OF STRUCTURE](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\))

-   Regular expression regex in the statements
    [FIND ... REGEX regex ... IN ...](javascript:call_link\('abapfind_pattern.htm'\))
    [REPLACE ... REGEX regex ... IN ...](javascript:call_link\('abapreplace_pattern.htm'\))

-   Search pattern substring in the statements
    [FIND ... SUBSTRING substring ... IN ...](javascript:call_link\('abapfind_pattern.htm'\))
    [REPLACE ... SUBSTRING substring ... IN ...](javascript:call_link\('abapreplace_pattern.htm'\))

-   Operand dobj in the statement
    [FIND ... IN dobj ...](javascript:call_link\('abapfind.htm'\))

-   Operand new in the statement
    [REPLACE ... WITH new ...](javascript:call_link\('abapreplace.htm'\))
    [REPLACE ... IN TABLE ... WITH new ...](javascript:call_link\('abapreplace_itab.htm'\))

-   Operand substring in the statement
    [SHIFT ... UP TO substring](javascript:call_link\('abapshift_places.htm'\))

-   Operand mask in the statement
    [SHIFT ... DELETING ... mask](javascript:call_link\('abapshift_deleting.htm'\))

-   Operands dobj and sep in the statement
    [SPLIT dobj AT sep INTO ...](javascript:call_link\('abapsplit.htm'\))

-   Operand text in the statement
    [CONVERT text INTO SORTABLE CODE ...](javascript:call_link\('abapconvert_text.htm'\))

-   Operands text2 and text2 in the statement
    [OVERLAY ... WITH text2 USING mask](javascript:call_link\('abapoverlay.htm'\))

-   Operand mask in the statement
    [TRANSLATE ... USING mask](javascript:call_link\('abaptranslate.htm'\))

-   Operand sub in the statement
    [ASSERT ... SUBKEY sub ...](javascript:call_link\('abapassert.htm'\))
    [LOG-POINT ... SUBKEY sub ...](javascript:call_link\('abaplog-point.htm'\))

-   Operands text and dobj1 to dobj4 in the statements
    MESSAGE [text](javascript:call_link\('abapmessage_text.htm'\)) ...
    MESSAGE ...[WITH dobj1 ... dobj4](javascript:call_link\('abapmessage.htm'\))

Example

Uses a string expression \`(\` && sub && \`)+\` to create a regular expression in the statement [FIND](javascript:call_link\('abapfind.htm'\)) to make it possible to find groups of a substring sub.

DATA: text TYPE string,
      sub  TYPE string.
FIND REGEX \`(\` && sub && \`)+\` IN text.



**📖 Source**: [abenstring_expression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_positions.htm)

### abenfunctional_positions.htm

> **📖 Official SAP Documentation**: [abenfunctional_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_positions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenfunctional_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_positions.htm)

### abenexpression_positions_read.htm

> **📖 Official SAP Documentation**: [abenexpression_positions_read.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_read.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) → 

Reader Positions for Functions and Expressions

-   [General Expression Positions](javascript:call_link\('abengeneral_expression_positions.htm'\))

-   [Numeric Expression Positions](javascript:call_link\('abennumeric_expression_positions.htm'\))

-   [Character-Like Expression Positions](javascript:call_link\('abenstring_expression_positions.htm'\))

-   [Functional Operand Positions](javascript:call_link\('abenfunctional_positions.htm'\))

Continue
[General Expression Positions](javascript:call_link\('abengeneral_expression_positions.htm'\))
[Numeric Expression Positions](javascript:call_link\('abennumeric_expression_positions.htm'\))
[Character-Like Expression Positions](javascript:call_link\('abenstring_expression_positions.htm'\))
[Functional Operand Positions](javascript:call_link\('abenfunctional_positions.htm'\))



**📖 Source**: [abenexpression_positions_read.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_read.htm)

### abenexpression_positions.htm

> **📖 Official SAP Documentation**: [abenexpression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenexpression_positions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) → 

Operand Positions for Functions and Expressions

-   [Writer Positions](javascript:call_link\('abenexpression_positions_write.htm'\))

-   [Reader Positions](javascript:call_link\('abenexpression_positions_read.htm'\))

Continue
[Writing Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_write.htm'\))
[Reader Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\))
