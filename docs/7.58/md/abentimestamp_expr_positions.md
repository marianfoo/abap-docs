---
title: "Time-Stamp-Like Expression Positions"
description: |
  Time-stamp-like expression positions are read positions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenread_position_glosry.htm 'Glossary Entry') where time stamp fields(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentimestamp_field_glosry.htm 'Glossary Entry') an
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentimestamp_expr_positions.htm"
abapFile: "abentimestamp_expr_positions.htm"
keywords: ["do", "if", "try", "method", "data", "abentimestamp", "expr", "positions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexpression_positions_read.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Time-Stamp-Like%20Expression%20Positions%2C%20ABENTIMESTAMP_EXPR_POSITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Time-Stamp-Like Expression Positions

Time-stamp-like expression positions are [read positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenread_position_glosry.htm "Glossary Entry") where [time stamp fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentimestamp_field_glosry.htm "Glossary Entry") and [constructor expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") can be specified, or [functional method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [time stamp type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentimestamp_type_glosry.htm "Glossary Entry"). The following time-stamp-like expression positions exist:

-   Time-stamp-like arguments in time stamp functions
    -   Operand time\_stamp of the function
        
        [utclong\_add( val  = time\_stamp ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutclong_add.htm)
        
    -   Operands time\_stamp2 and time\_stamp1 of the function
        
        [utclong\_diff( high = time\_stamp2 low = time\_stamp1 )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutclong_diff.htm)
        
-   Functional operand positions in statements for time stamps
    -   Operand time\_stamp of the statement
        
        [CONVERT UTCLONG time\_stamp TIME ZONE tz INTO ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_utclong.htm)
        

Example

Specification of a functional method call and a time stamp function as arguments of the time stamp function utclong\_diff.

DATA ts TYPE timestampl.
GET TIME STAMP FIELD ts.
cl\_demo\_output=>display(
  utclong\_diff(
    low =  cl\_abap\_tstmp=>tstmp2utclong( timestamp =  ts )
    high = utclong\_add( val = utclong\_current( )
                        hours = 1 ) ) ).