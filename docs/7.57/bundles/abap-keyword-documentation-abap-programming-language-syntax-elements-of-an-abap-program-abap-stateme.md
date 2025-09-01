# ABAP - Keyword Documentation / ABAP - Programming Language / Syntax Elements of an ABAP Program / ABAP Statements / Operand Positions

Included pages: 15


### abenoperand_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Operand Positions, ABENOPERAND_POSITIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Operand Positions

Most ABAP statements have operand positions, where [operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands.htm) can be specified as tokens. The following operand positions can be distinguished:

-   [read position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry")
    
    At a read position, the content of an operand is read but not changed when the statement is executed.
    
-   [write position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_position_glosry.htm "Glossary Entry")
    
    At a write position, the content of an operand is changed when the statement is executed.
    

-   [Operand Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_type.htm)
-   [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm)

Continue
[Operand Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_type.htm)
[Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm)


### abenoperand_type.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Operand Type, ABENOPERAND_TYPE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Operand Type

An operand position is typed by an operand type, which can be complete or generic and can also be dependent on other operand positions, for example in assignments. When a statement is executed, an operand with a suitable data type is expected. If an operand specified at an operand position has a different data type than the operand type, an attempt is usually made to convert the content of the operand to the operand type according to the [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) at [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry"), and in the other direction at [write positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_position_glosry.htm "Glossary Entry"). Here, it should be noted that every conversion incurs increased runtime costs. If no corresponding conversion rule is defined, or the content cannot be converted, a syntax error occurs or an exception is raised. Any deviations from this rule, for example that the operand must exactly match the operand type or the operand is [cast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencast_casting_glosry.htm "Glossary Entry") to the operand type regardless of its actual type, are described in the documentation of the individual statements.

-   [Operand Positions with Elementary Data Type](#@@ITOC@@ABENOPERAND_TYPE_1)
-   [Operand Positions with Structured Data Type](#@@ITOC@@ABENOPERAND_TYPE_2)
-   [Operand Positions with Tabular Data Type](#@@ITOC@@ABENOPERAND_TYPE_3)
-   [Operand Positions with Reference Data Type](#@@ITOC@@ABENOPERAND_TYPE_4)

Operand Positions with Elementary Data Type   

At operand positions for [elementary data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenelementary_data_object_glosry.htm "Glossary Entry"), the following must be specified when the statement is executed, depending on the operand type:

-   [Character-like data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")
-   [Numeric data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")
-   [Byte-like data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")

Generically [typed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_glosry.htm "Glossary Entry") formal parameters or field symbols can also be specified statically if they are typed more generally than the expected type.

[Flat structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_structure_glosry.htm "Glossary Entry") with only character-like components of the types c, n, d, or t can also be used in all operand positions where elementary fields are expected. Such structures are handled in the same way as a single data object of type c (implicit casting).

Operand Positions with Structured Data Type   

Structures must be specified at operand positions for [structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_glosry.htm "Glossary Entry") when the statement is executed. Formal parameters or field symbols of the generic types data or any can also be specified statically.

Operand Positions with Tabular Data Type   

[Internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_glosry.htm "Glossary Entry") must be specified at operand positions for internal tables both when the statement is executed. There are also operand positions, where internal tables must be known statically. At these positions, generic formal parameters and field symbols can only be specified if they are typed with at least the generic type [any table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm). Only index tables can be specified at operand positions where index access occurs, and generic formal parameters and field symbols must be typed with at least the generic type [index table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm).

Operand Positions with Reference Data Type   

Depending on the operand type, either data or object reference variables must be specified at operand positions for [reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_variable_glosry.htm "Glossary Entry") when the statement is executed. Formal parameters or field symbols of the generic types data or any can also be specified statically.


### abenexpression_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Expression Positions for Functions and Expressions, ABENEXPRESSION_POSITIONS, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Expression Positions for Functions and Expressions

Among the [operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands.htm) that can be specified at [operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) are functions and expressions. These can be specified at [expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_position_glosry.htm "Glossary Entry").

-   [Write Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_write.htm)
-   [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm)

Continue
[Write Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_write.htm)
[Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm)


### abenexpression_positions_write.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Write Positions for Functions and Expressions, ABENEXPRESSION_POSITIONS_WRITE, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Write Positions for Functions and Expressions

[Write positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_position_glosry.htm "Glossary Entry") are operand positions in which the operand is written to.

-   [Declaration Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_positions.htm)
-   [Result Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresult_positions.htm)

Continue
[Declaration Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_positions.htm)
[Result Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresult_positions.htm)


### abendeclaration_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) →  [Write Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_write.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Declaration Positions, ABENDECLARATION_POSITIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

Declaration Positions

Declaration positions are [write-only positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_only_position_glosry.htm "Glossary Entry") in which a [declaration expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") can be specified for an [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry"). There are no declaration positions within expressions.

Declaration positions include the following:

-   Positions for the inline declaration of variables with [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) and [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm). These are the following [write positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_position_glosry.htm "Glossary Entry"), where the operand type can be determined completely and where the content of the operand is not evaluated but completely overwritten.
    -   Left side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm)
        
        [lhs = ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm)
        
    -   Actual parameters for output parameters and return values of methods for [standalone method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static_short.htm):
        
        meth( [IMPORTING p1 = a1 p2 = a2...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm)
        
              [RECEIVING r  =  a](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm) )
        
        If a method call is located to the right side of an assignment or is part of an expression, these actual parameters are not declaration positions.
        
    -   Target fields when catching an exception:
        
        CATCH EXCEPTION [INTO oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_try.htm)
        
        CLEANUP [INTO oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcleanup.htm)
        
    -   Target fields in statements for string processing and byte string processing:
        
        FIND ... [MATCH COUNT mcnt](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
                 [MATCH OFFSET moff](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
                 [MATCH LENGTH mlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
                 [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
                 [SUBMATCHES s1 s2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
        REPLACE  ... [REPLACEMENT COUNT rcnt](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_options.htm)
                    [REPLACEMENT OFFSET moff](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_options.htm)
                    [REPLACEMENT LENGTH mlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_options.htm)
                    [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_options.htm)
        CONCATENATE ... [INTO result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate.htm)
        SPLIT ... [INTO result1 result2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsplit.htm)
                  [INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsplit.htm)
        CONVERT TEXT ... [INTO SORTABLE CODE hex](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_text.htm)
        GET BIT ... [INTO val](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_bit.htm).
        
    -   Target fields in statements for time stamps:
        
        CONVERT UTCLONG ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_utclong.htm)
        
        CONVERT ... [INTO UTCLONG time\_stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_date_utclong.htm)
        
        GET TIME STAMP [time\_stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_time-stamp.htm)
        
        CONVERT TIME STAMP ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_time-stamp.htm)
        
        CONVERT ... [INTO TIME STAMP time\_stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_date_time-stamp.htm)
        
    -   Target fields in statements for internal tables:
        
        READ TABLE ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_outdesc.htm)
        
        LOOP AT ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm)
        
        INSERT ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_result.htm)
        
        COLLECT    ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm)
        
        APPEND     ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend_result.htm)
        
        MODIFY ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_result.htm)
        
        FIND ... IN TABLE [MATCH COUNT mcnt](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab_options.htm)
                 IN TABLE [MATCH LINE mlin](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab_options.htm)
                 IN TABLE [MATCH OFFSET moff](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab_options.htm)
                 IN TABLE [MATCH LENGTH mlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab_options.htm)
                 IN TABLE [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab_options.htm)
                 IN TABLE [SUBMATCHES s1 s2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab_options.htm)
        
        REPLACE ... IN TABLE [REPLACEMENT COUNT rcnt](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab_options.htm)
                    IN TABLE [REPLACEMENT LINE rlin](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab_options.htm)
                    IN TABLE [REPLACEMENT OFFSET moff](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab_options.htm)
                    IN TABLE [REPLACEMENT LENGTH mlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab_options.htm)
                    IN TABLE [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab_options.htm)
        
    -   Target fields of the ABAP SQL statement SELECT:
        
        SELECT ... [INTO (elem1, elem2, ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm)
        
        SELECT ... [INTO wa](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm)
        
        SELECT ... [INTO TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm)
        
    -   Cursor field of the ABAP SQL statement OPEN CURSOR:
        
        OPEN CURSOR [dbcur](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm)
        
        Here, only DATA but not FINAL can be used.
        
    -   Target fields of the statement DESCRIBE:
        
        DESCRIBE FIELD ... [TYPE typ *\[*COMPONENTS com*\]* LENGTH ilen DECIMALS dec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe_field.htm)
                           [OUTPUT-LENGTH olen HELP-ID hlp EDIT MASK mask](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe_field.htm)
        
        DESCRIBE TABLE ... [KIND knd LINES lin OCCURS n](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe_table.htm)
        
        DESCRIBE DISTANCE ... [INTO dst](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe_distance.htm)
        
    -   Target fields of various GET statements:
        
        GET PARAMETER ... [FIELD dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_parameter.htm)
        
        GET PF-STATUS [status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_pf.htm)
        
        GET REFERENCE [INTO dref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_reference.htm)
        
        GET RUN TIME FIELD [rtime](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_run_time.htm)
        
        GET TIME [FIELD tim](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_time.htm)
        
    -   Work area in statement for dynpros:
        
        LOOP AT SCREEN ... [INTO wa](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_screen.htm)
        
    -   Target field for message output:
        
        MESSAGE ... [INTO text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm)
        
    -   Target fields in file interface statements:
        
        READ DATASET ... [LENGTH alen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_dataset.htm)
        
        GET DATASET ... [POSITION pos](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_dataset.htm) [ATTRIBUTES attr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_dataset.htm)
        
    -   Target field for a serialization:
        
        CALL TRANSFORMATION ... [RESULT XML rxml](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm)
        
    -   All write positions during program generation:
        
        GENERATE SUBROUTINE POOL ... [NAME prog](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_subroutine_pool.htm) [error\_handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_subr_error_handling.htm)
        
    -   [RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_glosry.htm "Glossary Entry") response structures and internal tables typed with [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"):
        
        MODIFY *\[*ENTITY*|*ENTITIES*\]* ... *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
        
        COMMIT ENTITIES ... *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
        
        GET PERMISSIONS ... *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
        
        READ *\[*ENTITY*|*ENTITIES*\]* ... *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
        
        SET LOCKS ... *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
        
-   Positions for the inline declaration of field symbols with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield-symbol_inline.htm). These are all places where a memory area can be assigned to a field symbol.
    -   Field symbol in the statement ASSIGN:
        
        ASSIGN... [TO <fs>](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm)
        
    -   Field symbols in statements for internal tables:
        
        READ TABLE ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_outdesc.htm)
        
        LOOP AT ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm)
        
        INSERT ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_result.htm)
        
        COLLECT    ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm)
        
        APPEND     ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend_result.htm)
        
        MODIFY ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_result.htm)
        

Hint

Unlike in [standalone method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static_short.htm), inline declarations cannot be specified as actual parameters for output parameters in a [functional method call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_functional.htm).

Example

Declaration expression [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) for the declaration of an internal table itab after the addition [INTO TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).


### abenresult_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) →  [Write Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_write.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Result Positions, ABENRESULT_POSITIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

Result Positions

Result positions are [write positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_position_glosry.htm "Glossary Entry") in which [writable expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified. Writes are performed on the result of the expression. Result positions include the following:

-   Left side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm)
-   Operand dobj of the statement [CLEAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm)
-   Memory area mem\_area of the statement [ASSIGN mem\_area TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_writable_exp.htm)
-   Structure struc of the statement [ASSIGN COMPONENT comp OF STRUCTURE struc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm)
-   Actual parameter in [method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls.htm) for [output parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm), [input/output parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm), and [return values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm)
-   Right side in the declaration of a local field symbol in a [LET expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplet.htm)

Example

Uses a table expression itab\[ sy-index \] on the left side of a [calculation assignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignment_glosry.htm "Glossary Entry").

DATA itab TYPE TABLE OF i.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
DO 3 TIMES.
  itab\[ sy-index \] \*= 10.
ENDDO.


### abenexpression_positions_write.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Write Positions for Functions and Expressions, ABENEXPRESSION_POSITIONS_WRITE, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Write Positions for Functions and Expressions

[Write positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwrite_position_glosry.htm "Glossary Entry") are operand positions in which the operand is written to.

-   [Declaration Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_positions.htm)
-   [Result Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresult_positions.htm)

Continue
[Declaration Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_positions.htm)
[Result Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresult_positions.htm)


### abenexpression_positions_read.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Read Positions for Functions and Expressions, ABENEXPRESSION_POSITIONS_READ, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Read Positions for Functions and Expressions

-   [General Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expression_positions.htm)
-   [Numeric Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_expression_positions.htm)
-   [Character-Like Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expression_positions.htm)
-   [Time-Stamp-Like Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_expr_positions.htm)
-   [Functional Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_positions.htm)

Continue
[General Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expression_positions.htm)
[Numeric Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_expression_positions.htm)
[Character-Like Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expression_positions.htm)
[Time-Stamp-Like Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_expr_positions.htm)
[Functional Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_positions.htm)


### abengeneral_expression_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: General Expression Positions, ABENGENERAL_EXPRESSION_POSITIONS, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

General Expression Positions

General expression positions are [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry") where appropriate [data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry"), [calculation expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), [built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), or [functional method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") can be specified. The following general expression positions are available:

-   Right side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm)
-   Operands of [arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm) and [bit expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_bit.htm)
-   [Embedded expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm)
-   Operands of [comparison expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomparison_expression_glosry.htm "Glossary Entry") in [logical expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm)
-   Operand of the statement [CASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase.htm)
-   [Actual parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_arith_expr.htm) for input parameters of methods in [meth( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm), [RAISE EVENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_event.htm), [CREATE OBJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object.htm), and [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) or [THROW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expressions.htm)
-   [Actual parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_arith_expr.htm) for input parameters of function modules in the case of [CALL FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm)
-   Arguments of [built-in](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) [numeric functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmathematical_functions.htm) if these are specified in an arithmetic expression
-   Reference variable oref of the statement [RAISE EXCEPTION oref.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm)
-   The operands after the addition WITH TABLE KEY of the statements [READ TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) and [DELETE TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab_line.htm)
-   The operands after the addition [WITH KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_free.htm) of the statement [READ TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm)
-   Work area wa of the following statements:
    -   [APPEND wa TO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend_linespec.htm)
    -   [INSERT wa INTO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_linespec.htm)
    -   [MODIFY ... FROM wa ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_single.htm)
-   Expression exp for dynamic sorting at:
    -   [SORT itab BY exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm)
-   Source fields of the statements [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm) and [WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm), with the restriction that [arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_expression_glosry.htm "Glossary Entry") cannot be specified directly but can only be specified as content of [embedded expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenembedded_expression_glosry.htm "Glossary Entry") in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_glosry.htm "Glossary Entry")

The type restrictions determined by the [operand type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_type.htm) apply in the operand positions. For example, no [numeric functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry") can be specified in a bit expression.

Hints

-   By specifying [functional methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") as actual parameters of methods, it is possible to nest method calls in an operand position.
-   The three types of [calculation expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_expression_glosry.htm "Glossary Entry") can be listed as operands of relational expressions, but they cannot be combined in one calculation expression.

Example

Specification of a constructor expressions with the value operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm) on the right side of an assignment and of a constructor expression with the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_reduce.htm) as an input parameter for the method DISPLAY of the class CL\_DEMO\_OUTPUT.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY.
FINAL(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ).
cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR <wa> IN itab
                 NEXT s &&= <wa> && \` \` ) ).


### abennumeric_expression_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Numeric Expression Positions, ABENNUMERIC_EXPRESSION_POSITIONS, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Numeric Expression Positions

Numeric expression positions are [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry") where [numeric data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), or [functional method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"), can be specified. The following numeric expression positions exist:

-   Arguments of functions
    -   Numeric arguments of [string functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm)
    -   Numeric arguments of [extremum functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennmax_nmin_functions.htm)
-   Counters and positions:
    -   Operand comp of the statement
        
        [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm)
        
    -   Operand n of the statement
        
        [DO n TIMES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo.htm)
        
    -   Operand sec of the statement
        
        [WAIT UP TO sec SECONDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_up_to.htm)
        
    -   Operand num of the statement
        
        [SHIFT ... BY num PLACES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_places.htm)
        
    -   Operands bitpos and val of the statement
        
        [SET BIT bitpos ... TO val](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_bit.htm).
        
    -   Operand bitpos of the statement
        
        [GET BIT bitpos ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_bit.htm).
        
-   Positions specifications in the statements FIND and REPLACE:
    -   Operands off and len of the statements
        
        [FIND ... IN SECTION ... OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_section_of.htm)
        [REPLACE ... IN SECTION ... OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_section_of.htm)
        
    -   Operands lin1, off1, lin2, and off2 of the statements
        
        [FIND ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_table_range.htm)
        [REPLACE  ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_table_range.htm)
        
    -   Operands off and len of the statement
        
        [REPLACE SECTION OFFSET off LENGTH len OF ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_in_position.htm)
        
-   Specification of the line number idx with respect to a table index when accessing internal tables in the following:
    -   [READ TABLE itab INDEX idx ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_index.htm)
    -   [LOOP AT itab ...FROM idx1 TO idx2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm)
    -   [INSERT itab ... INDEX idx ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_position.htm)
    -   [INSERT LINES OF jtab FROM idx1 TO idx2  ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_linespec.htm)
    -   [APPEND LINES OF jtab FROM idx1 TO idx2  ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend_linespec.htm)
    -   [MODIFY itab INDEX idx  ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_index.htm)
    -   [DELETE itab INDEX idx  ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab_line.htm)
    -   [DELETE itab FROM idx1 TO idx2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab_lines.htm)

Example

Specifies a built-in function lines( itab ) for specifying the loop passes of a [DO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo.htm) loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
DO lines( itab ) TIMES.
  ...
ENDDO.


### abenstring_expression_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Character-Like Expression Positions, ABENSTRING_EXPRESSION_POSITIONS, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Character-Like Expression Positions

Character-like expression positions are [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry") where [character-like data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") can be specified, as well as [functional method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [character-like data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"). The following character-like expression positions exist:

-   Operand positions in [string expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm)
-   Character-like arguments in [processing functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocess_functions.htm)
-   Character-like arguments in [description functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescriptive_functions.htm)
-   Operand comp of the statement
    
    [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm)
    
-   Regular expression regex in the statements
    
    [FIND ... PCRE*|*REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_pattern.htm)
    [REPLACE ... PCRE*|*REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_pattern.htm)
    
-   Search pattern substring in the statements
    
    [FIND ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_pattern.htm)
    [REPLACE ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_pattern.htm)
    
-   Operand dobj in the statement
    
    [FIND ... IN dobj ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm)
    
-   Operand new in the statement
    
    [REPLACE ... WITH new ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm)
    [REPLACE ... IN TABLE ... WITH new ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab.htm)
    
-   Operand substring in the statement
    
    [SHIFT ... UP TO substring](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_places.htm)
    
-   Operand mask in the statement
    
    [SHIFT ... DELETING ... mask](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_deleting.htm)
    
-   Operands dobj and sep in the statement
    
    [SPLIT dobj AT sep INTO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsplit.htm)
    
-   Operand text in the statement
    
    [CONVERT text INTO SORTABLE CODE ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_text.htm)
    
-   Operands text2 and text2 in the statement
    
    [OVERLAY ... WITH text2 USING mask](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapoverlay.htm)
    
-   Operand mask in the statement
    
    [TRANSLATE ... USING mask](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptranslate.htm)
    
-   Operand sub in the statement
    
    [ASSERT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassert.htm)
    
    [LOG-POINT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplog-point.htm)
    
-   Operands text and dobj1 to dobj4 in the statements
    
    MESSAGE [text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_text.htm) ...
    MESSAGE ...[WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm)
    

Example

Use of a string expression \`(\` && sub && \`)+\` to form a regular expression in the statement [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) to make it possible to find groups of a substring sub.

DATA: text TYPE string,
      sub  TYPE string.
FIND PCRE \`(\` && sub && \`)+\` IN text.


### abentimestamp_expr_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Time-Stamp-Like Expression Positions, ABENTIMESTAMP_EXPR_POSITIONS, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Time-Stamp-Like Expression Positions

Time-stamp-like expression positions are [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry") where [time stamp fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_field_glosry.htm "Glossary Entry") and [constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") can be specified, or [functional method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [time stamp type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_type_glosry.htm "Glossary Entry"). The following time-stamp-like expression positions exist:

-   Time-stamp-like arguments in time stamp functions
    -   Operand time\_stamp of the function
        
        [utclong\_add( val  = time\_stamp ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong_add.htm)
        
    -   Operands time\_stamp2 and time\_stamp1 of the function
        
        [utclong\_diff( high = time\_stamp2 low = time\_stamp1 )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong_diff.htm)
        
-   Functional operand positions in statements for time stamps
    -   Operand time\_stamp of the statement
        
        [CONVERT UTCLONG time\_stamp TIME ZONE tz INTO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_utclong.htm)
        

Example

Specification of a functional method call and a time stamp function as arguments of the time stamp function utclong\_diff.

DATA ts TYPE timestampl.
GET TIME STAMP FIELD ts.
cl\_demo\_output=>display(
  utclong\_diff(
    low =  cl\_abap\_tstmp=>tstmp2utclong( timestamp =  ts )
    high = utclong\_add( val = utclong\_current( )
                        hours = 1 ) ) ).


### abenfunctional_positions.htm

  

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


### abenexpression_positions_read.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Read Positions for Functions and Expressions, ABENEXPRESSION_POSITIONS_READ, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Read Positions for Functions and Expressions

-   [General Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expression_positions.htm)
-   [Numeric Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_expression_positions.htm)
-   [Character-Like Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expression_positions.htm)
-   [Time-Stamp-Like Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_expr_positions.htm)
-   [Functional Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_positions.htm)

Continue
[General Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expression_positions.htm)
[Numeric Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_expression_positions.htm)
[Character-Like Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expression_positions.htm)
[Time-Stamp-Like Expression Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_expr_positions.htm)
[Functional Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_positions.htm)


### abenexpression_positions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Expression Positions for Functions and Expressions, ABENEXPRESSION_POSITIONS, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Expression Positions for Functions and Expressions

Among the [operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands.htm) that can be specified at [operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm) are functions and expressions. These can be specified at [expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_position_glosry.htm "Glossary Entry").

-   [Write Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_write.htm)
-   [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm)

Continue
[Write Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_write.htm)
[Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions_read.htm)
