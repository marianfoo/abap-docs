  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Syntax Elements of an ABAP Program](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operand Positions](javascript:call_link\('abenoperand_positions.htm'\)) →  [Expression Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Write Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_write.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Declaration Positions, ABENDECLARATION_POSITIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

Declaration Positions

Declaration positions are [write-only positions](javascript:call_link\('abenwrite_only_position_glosry.htm'\) "Glossary Entry") in which a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry") can be specified for an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry"). There are no declaration positions within expressions.

Declaration positions include the following:

-   Positions for the inline declaration of variables with [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) and [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)). These are the following [write positions](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry"), where the operand type can be determined completely and where the content of the operand is not evaluated but completely overwritten.
    -   Left side of an assignment with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\))
        
        [lhs = ...](javascript:call_link\('abenequals_operator.htm'\))
        
    -   Actual parameters for output parameters and return values of methods for [standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)):
        
        meth( [IMPORTING p1 = a1 p2 = a2...](javascript:call_link\('abapcall_method_parameters.htm'\))
        
              [RECEIVING r  =  a](javascript:call_link\('abapcall_method_parameters.htm'\)) )
        
        If a method call is located to the right side of an assignment or is part of an expression, these actual parameters are not declaration positions.
        
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
        
        CONVERT UTCLONG ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](javascript:call_link\('abapconvert_utclong.htm'\))
        
        CONVERT ... [INTO UTCLONG time\_stamp](javascript:call_link\('abapconvert_date_utclong.htm'\))
        
        GET TIME STAMP [time\_stamp](javascript:call_link\('abapget_time-stamp.htm'\))
        
        CONVERT TIME STAMP ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](javascript:call_link\('abapconvert_time-stamp.htm'\))
        
        CONVERT ... [INTO TIME STAMP time\_stamp](javascript:call_link\('abapconvert_date_time-stamp.htm'\))
        
    -   Target fields in statements for internal tables:
        
        READ TABLE ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapread_table_outdesc.htm'\))
        
        LOOP AT ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abaploop_at_itab_result.htm'\))
        
        INSERT ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapinsert_itab_result.htm'\))
        
        COLLECT    ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapcollect_itab_result.htm'\))
        
        APPEND     ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapappend_result.htm'\))
        
        MODIFY ... [*\[*REFERENCE*\]* INTO dobj](javascript:call_link\('abapmodify_itab_result.htm'\))
        
        FIND ... IN TABLE [MATCH COUNT mcnt](javascript:call_link\('abapfind_itab_options.htm'\))
                 IN TABLE [MATCH LINE mlin](javascript:call_link\('abapfind_itab_options.htm'\))
                 IN TABLE [MATCH OFFSET moff](javascript:call_link\('abapfind_itab_options.htm'\))
                 IN TABLE [MATCH LENGTH mlen](javascript:call_link\('abapfind_itab_options.htm'\))
                 IN TABLE [RESULTS result\_tab*|*result\_wa](javascript:call_link\('abapfind_itab_options.htm'\))
                 IN TABLE [SUBMATCHES s1 s2 ...](javascript:call_link\('abapfind_itab_options.htm'\))
        
        REPLACE ... IN TABLE [REPLACEMENT COUNT rcnt](javascript:call_link\('abapreplace_itab_options.htm'\))
                    IN TABLE [REPLACEMENT LINE rlin](javascript:call_link\('abapreplace_itab_options.htm'\))
                    IN TABLE [REPLACEMENT OFFSET moff](javascript:call_link\('abapreplace_itab_options.htm'\))
                    IN TABLE [REPLACEMENT LENGTH mlen](javascript:call_link\('abapreplace_itab_options.htm'\))
                    IN TABLE [RESULTS result\_tab*|*result\_wa](javascript:call_link\('abapreplace_itab_options.htm'\))
        
    -   Target fields of the ABAP SQL statement SELECT:
        
        SELECT ... [INTO (elem1, elem2, ... )](javascript:call_link\('abapinto_clause.htm'\))
        
        SELECT ... [INTO wa](javascript:call_link\('abapinto_clause.htm'\))
        
        SELECT ... [INTO TABLE itab](javascript:call_link\('abapinto_clause.htm'\))
        
    -   Cursor field of the ABAP SQL statement OPEN CURSOR:
        
        OPEN CURSOR [dbcur](javascript:call_link\('abapopen_cursor.htm'\))
        
        Here, only DATA but not FINAL can be used.
        
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
        
    -   All write positions during program generation:
        
        GENERATE SUBROUTINE POOL ... [NAME prog](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) [error\_handling](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
        
    -   [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") response structures and internal tables typed with [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"):
        
        MODIFY *\[*ENTITY*|*ENTITIES*\]* ... *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
        
        COMMIT ENTITIES ... *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
        
        GET PERMISSIONS ... *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
        
        READ *\[*ENTITY*|*ENTITIES*\]* ... *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
        
        SET LOCKS ... *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
        
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
        

Hint

Unlike in [standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)), inline declarations cannot be specified as actual parameters for output parameters in a [functional method call](javascript:call_link\('abapcall_method_functional.htm'\)).

Example

Declaration expression [DATA](javascript:call_link\('abendata_inline.htm'\)) for the declaration of an internal table itab after the addition [INTO TABLE](javascript:call_link\('abapinto_clause.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).