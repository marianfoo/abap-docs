  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexpression_positions_read.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Character-Like%20Expression%20Positions%2C%20ABENSTRING_EXPRESSION_POSITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Character-Like Expression Positions

Character-like expression positions are [read positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenread_position_glosry.htm "Glossary Entry") where [character-like data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") can be specified, as well as [functional method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"). The following character-like expression positions exist:

-   Operand positions in [string expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string.htm)
-   Character-like arguments in [processing functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm)
-   Character-like arguments in [description functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendescriptive_functions.htm)
-   Operand comp of the statement
    
    [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_dynamic_components.htm)
    
-   Regular expression regex in the statements
    
    [FIND ... PCRE*|*REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_pattern.htm)
    [REPLACE ... PCRE*|*REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace_pattern.htm)
    
-   Search pattern substring in the statements
    
    [FIND ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_pattern.htm)
    [REPLACE ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace_pattern.htm)
    
-   Operand dobj in the statement
    
    [FIND ... IN dobj ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm)
    
-   Operand new in the statement
    
    [REPLACE ... WITH new ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace.htm)
    [REPLACE ... IN TABLE ... WITH new ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace_itab.htm)
    
-   Operand substring in the statement
    
    [SHIFT ... UP TO substring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapshift_places.htm)
    
-   Operand mask in the statement
    
    [SHIFT ... DELETING ... mask](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapshift_deleting.htm)
    
-   Operands dobj and sep in the statement
    
    [SPLIT dobj AT sep INTO ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsplit.htm)
    
-   Operand text in the statement
    
    [CONVERT text INTO SORTABLE CODE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_text.htm)
    
-   Operands text2 and text2 in the statement
    
    [OVERLAY ... WITH text2 USING mask](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapoverlay.htm)
    
-   Operand mask in the statement
    
    [TRANSLATE ... USING mask](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptranslate.htm)
    
-   Operand sub in the statement
    
    [ASSERT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm)
    
    [LOG-POINT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplog-point.htm)
    
-   Operands text and dobj1 to dobj4 in the statements
    
    MESSAGE [text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_text.htm) ...
    MESSAGE ... [WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm)
    

Example

Use of a string expression \`(\` && sub && \`)+\` to form a regular expression in the statement [FIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm) to make it possible to find groups of a substring sub.

DATA: text TYPE string,
      sub  TYPE string.
FIND PCRE \`(\` && sub && \`)+\` IN text.