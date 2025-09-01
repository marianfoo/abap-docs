  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Reading Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

Character-Like Expression Positions

Character-like expression positions are [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") in which [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry"), [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), and [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") can be specified, as well as [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") whose return values have a [character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry"). The following character-like expression positions exist:

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