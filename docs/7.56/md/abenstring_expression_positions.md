  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_positions_read.htm) → 

Character-Like Expression Positions

Character-like expression positions are [read positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenread_position_glosry.htm "Glossary Entry") where [character-like data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") can be specified, as well as [functional method calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [character-like data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"). The following character-like expression positions exist:

-   Operand positions in [string expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string.htm)
-   Character-like arguments in [processing functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocess_functions.htm)
-   Character-like arguments in [description functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendescriptive_functions.htm)
-   Operand comp of the statement
    
    [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_dobj.htm)
    
-   Regular expression regex in the statements
    
    [FIND ... PCRE*|*REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_pattern.htm)
    [REPLACE ... PCRE*|*REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm)
    
-   Search pattern substring in the statements
    
    [FIND ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_pattern.htm)
    [REPLACE ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm)
    
-   Operand dobj in the statement
    
    [FIND ... IN dobj ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm)
    
-   Operand new in the statement
    
    [REPLACE ... WITH new ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm)
    [REPLACE ... IN TABLE ... WITH new ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_itab.htm)
    
-   Operand substring in the statement
    
    [SHIFT ... UP TO substring](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapshift_places.htm)
    
-   Operand mask in the statement
    
    [SHIFT ... DELETING ... mask](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapshift_deleting.htm)
    
-   Operands dobj and sep in the statement
    
    [SPLIT dobj AT sep INTO ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsplit.htm)
    
-   Operand text in the statement
    
    [CONVERT text INTO SORTABLE CODE ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_text.htm)
    
-   Operands text2 and text2 in the statement
    
    [OVERLAY ... WITH text2 USING mask](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapoverlay.htm)
    
-   Operand mask in the statement
    
    [TRANSLATE ... USING mask](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptranslate.htm)
    
-   Operand sub in the statement
    
    [ASSERT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassert.htm)
    
    [LOG-POINT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplog-point.htm)
    
-   Operands text and dobj1 to dobj4 in the statements
    
    MESSAGE [text](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_text.htm) ...
    MESSAGE ...[WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage.htm)
    

Example

Use of a string expression \`(\` && sub && \`)+\` to form a regular expression in the statement [FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm) to make it possible to find groups of a substring sub.

DATA: text TYPE string,
      sub  TYPE string.
FIND PCRE \`(\` && sub && \`)+\` IN text.