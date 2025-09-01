  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Writing Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_write.htm) → 

Declaration Positions

Declaration positions are [writing-only positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriting_position_glosry.htm "Glossary Entry") in which a [declaration expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") can be specified for an [inline declaration](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninline_declaration_glosry.htm "Glossary Entry"). There are no declaration positions within expressions.

The following declaration positions are possible:

-   Positions for the inline declaration of variables with [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). These are the following [writer positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriting_position_glosry.htm "Glossary Entry"), where the operand type can be determined in full and where the content of the operand is completely overwritten but not evaluated.

-   Left side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm)
    [lhs = ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm)

-   Actual parameters for output parameters and return values of methods for [standalone method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm):
    meth( [IMPORTING p1 = a1 p2 = a2...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm)
          [RECEIVING r  =  a](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm) )
    If a method call is on the right side of an assignment or is part of an expression, these actual parameters are not declaration positions.

-   Target fields when catching an exception:
    CATCH EXCEPTION [INTO oref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_try.htm)
    CLEANUP [INTO oref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcleanup.htm)

-   Target fields in statements for string processing and byte string processing:
    FIND ... [MATCH COUNT mcnt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
             [MATCH OFFSET moff](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
             [MATCH LENGTH mlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
             [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
             [SUBMATCHES s1 s2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
    REPLACE  ... [REPLACEMENT COUNT rcnt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_options.htm)
                [REPLACEMENT OFFSET moff](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_options.htm)
                [REPLACEMENT LENGTH mlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_options.htm)
                [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_options.htm)
    CONCATENATE ... [INTO result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconcatenate.htm)
    SPLIT ... [INTO result1 result2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsplit.htm)
              [INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsplit.htm)
    CONVERT TEXT ... [INTO SORTABLE CODE hex](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_text.htm)
    GET BIT ... [INTO val](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_bit.htm).

-   Target fields in statements for time stamps:
    CONVERT UTCLONG ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_utclong.htm)
    CONVERT ... [INTO UTCLONG time\_stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_utclong.htm)
    GET TIME STAMP [time\_stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_time-stamp.htm)
    CONVERT TIME STAMP ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time-stamp.htm)
    CONVERT ... [INTO TIME STAMP time\_stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_time-stamp.htm)

-   Target fields in statements for internal tables:
    READ TABLE ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm)
    LOOP AT ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm)
    INSERT ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_result.htm)
    COLLECT    ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect_itab_result.htm)
    APPEND     ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend_result.htm)
    MODIFY ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_result.htm)
    FIND ... IN TABLE [MATCH COUNT mcnt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [MATCH LINE mlin](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [MATCH OFFSET moff](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [MATCH LENGTH mlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [SUBMATCHES s1 s2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
    REPLACE ... IN TABLE [REPLACEMENT COUNT rcnt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)
                IN TABLE [REPLACEMENT LINE rlin](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)
                IN TABLE [REPLACEMENT OFFSET moff](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)
                IN TABLE [REPLACEMENT LENGTH mlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)
                IN TABLE [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)

-   Target fields of the ABAP SQL statement SELECT:
    SELECT ... [INTO (elem1, elem2, ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm)
    SELECT ... [INTO wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm)
    SELECT ... [INTO TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm)

-   Target fields of the statement DESCRIBE:
    DESCRIBE FIELD ... [TYPE typ *\[*COMPONENTS com*\]* LENGTH ilen DECIMALS dec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm)
                       [OUTPUT-LENGTH olen HELP-ID hlp EDIT MASK mask](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm)
    DESCRIBE TABLE ... [KIND knd LINES lin OCCURS n](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_table.htm)
    DESCRIBE DISTANCE ... [INTO dst](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_distance.htm)

-   Target fields of various GET statements:
    GET PARAMETER ... [FIELD dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_parameter.htm)
    GET PF-STATUS [status](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_pf.htm)
    GET REFERENCE [INTO dref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_reference.htm)
    GET RUN TIME FIELD [rtime](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_run_time.htm)
    GET TIME [FIELD tim](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_time.htm)
    

-   Work area in statement for dynpros:
    LOOP AT SCREEN ... [INTO wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_screen.htm)

-   Target field for message output:
    MESSAGE ... [INTO text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm)

-   Target fields in file interface statements:
    READ DATASET ... [LENGTH alen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_dataset.htm)
    GET DATASET ... [POSITION pos](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset.htm) [ATTRIBUTES attr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset.htm)
    

-   Target field for a serialization:
    CALL TRANSFORMATION ... [RESULT XML rxml](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm)

-   All writing positions used when generating programs:
    GENERATE GENERATE SUBROUTINE POOL ... [NAME prog](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgenerate_subroutine_pool.htm) [error\_handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgenerate_subr_error_handling.htm)

-   Positions for the inline declaration of field symbols with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield-symbol_inline.htm). These are all places where a memory area can be assigned to a field symbol.

-   Field symbol in the statement ASSIGN:
    ASSIGN... [TO <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm)

-   Field symbols in statements for internal tables:
    READ TABLE ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm)
    LOOP AT ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm)
    INSERT ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_result.htm)
    COLLECT    ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect_itab_result.htm)
    APPEND     ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend_result.htm)
    MODIFY ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_result.htm)

Note

Unlike in [standalone method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm), in a [functional method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) inline declarations cannot be specified as actual parameters for output parameters.

Example

Declaration expression [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm) for declaring an internal table itab after the addition [INTO TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).