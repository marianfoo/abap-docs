# ABAP Keyword Documentation / ABAP − Reference / ABAP Syntax

Included pages: 3


### abenstructure_component_selector.htm

---
title: "Structure Component Selector"
description: |
  A component comp of a structured data type or a structure struct is accessed using the name struct-comp In this case, the character - is the structure component selector. A structured data type or a structure struct must be specified as follows on the left of the structure component selector: -   N
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_component_selector.htm"
abapFile: "abenstructure_component_selector.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "abenstructure", "component", "selector"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_names.htm) → 

Structure Component Selector

A component comp of a structured data type or a structure struct is accessed using the name

struct-comp

In this case, the character \- is the structure component selector. A structured data type or a structure struct must be specified as follows on the left of the structure component selector:

-   Name of a structure or a structured type (which can itself be composite).

-   [Functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with a structured result.

-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry") that returns a structured table row.

The name comp of the component must be on the right of the structure component selector.

Example

Declares a structure struc with the structured data type spfli from ABAP Dictionary and accesses its component carrid.

DATA struc TYPE spfli.
...
... struc-carrid ...


### abenstring_expression_positions.htm

---
title: "Character-Like Expression Positions"
description: |
  Character-like expression positions are reading positions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm 'Glossary Entry') in which character-like data objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.h
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_positions.htm"
abapFile: "abenstring_expression_positions.htm"
keywords: ["do", "if", "try", "method", "data", "abenstring", "expression", "positions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions_read.htm) → 

Character-Like Expression Positions

Character-like expression positions are [reading positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry") in which [character-like data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_function_glosry.htm "Glossary Entry") can be specified, as well as [functional method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return values have a [character-like data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"). The following character-like expression positions exist:

-   Operand positions in [string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm)

-   Character-like arguments in [processing functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocess_functions.htm)

-   Character-like arguments in [description functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendescriptive_functions.htm)

-   Operand comp of the statement
    [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_dynamic_dobj.htm)

-   Regular expression regex in the statements
    [FIND ... REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm)
    [REPLACE ... REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_pattern.htm)

-   Search pattern substring in the statements
    [FIND ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm)
    [REPLACE ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_pattern.htm)

-   Operand dobj in the statement
    [FIND ... IN dobj ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm)

-   Operand new in the statement
    [REPLACE ... WITH new ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace.htm)
    [REPLACE ... IN TABLE ... WITH new ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab.htm)

-   Operand substring in the statement
    [SHIFT ... UP TO substring](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapshift_places.htm)

-   Operand mask in the statement
    [SHIFT ... DELETING ... mask](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapshift_deleting.htm)

-   Operands dobj and sep in the statement
    [SPLIT dobj AT sep INTO ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsplit.htm)

-   Operand text in the statement
    [CONVERT text INTO SORTABLE CODE ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_text.htm)

-   Operands text2 and text2 in the statement
    [OVERLAY ... WITH text2 USING mask](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapoverlay.htm)

-   Operand mask in the statement
    [TRANSLATE ... USING mask](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptranslate.htm)

-   Operand sub in the statement
    [ASSERT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassert.htm)
    [LOG-POINT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplog-point.htm)

-   Operands text and dobj1 to dobj4 in the statements
    MESSAGE [text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_text.htm) ...
    MESSAGE ...[WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm)

Example

Uses a string expression \`(\` && sub && \`)+\` to create a regular expression in the statement [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm) to make it possible to find groups of a substring sub.

DATA: text TYPE string,
      sub  TYPE string.
FIND REGEX \`(\` && sub && \`)+\` IN text.


### abensyntax_conventions.htm

---
title: "Syntax Conventions in the ABAP Keyword Documentation"
description: |
  The ABAP keyword documentation uses the following syntax conventions: -   ABAP words are displayed in uppercase letters. Example: APPEND, NON-UNIQUE, INTO -   Operands are displayed in lowercase letters. Example: dobj, dbtab -   Parts of statements whose syntax diagrams are shown in another place ar
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensyntax_conventions.htm"
abapFile: "abensyntax_conventions.htm"
keywords: ["do", "if", "case", "abensyntax", "conventions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) → 

Syntax Conventions in the ABAP Keyword Documentation

The ABAP keyword documentation uses the following syntax conventions:

-   ABAP words are displayed in uppercase letters.
    Example:
    APPEND, NON-UNIQUE, INTO
    

-   Operands are displayed in lowercase letters.
    Example:
    dobj, dbtab
    

-   Parts of statements whose syntax diagrams are shown in another place are displayed as pseudo syntax.
    Example:
    selscreen\_options, list\_options
    

-   Periods, commas, colons, and parentheses are displayed as normal. They are part of the ABAP syntax.
    Example:
    . : , ()
    

-   Operators are displayed as normal. They are part of the ABAP syntax.
    Example:
    +, -, \*, /
    

-   Parts of statements that are optional are displayed in square brackets *\[* *\]*. A list of parts of statements in square brackets like this means that some or all of the parts can be used. If at least one part must be used, this is noted in the text. When used as part of the ABAP syntax, square brackets \[ \] are shown in the same color as all other language elements and are not shown in italics.
    Example::
    *\[*NO-GROUPING*\]* *\[*NO-SIGN*\]* *\[*NO-ZERO*\]*
    

-   Light-colored vertical slashes (*|*) between parts of statements mean that only one of the parts specified within a statement can be used. A vertical slash like this always joins immediate neighbors. When used as part of the ABAP syntax, vertical slashes | are shown in the same color as all other language elements.
    Example:
    DDMMYY *|* MMDDYY *|* YYMMDD
    

-   Light-colored curly brackets (*{* *}*) in italics group together related parts of statements, for example on the right or left of vertical slashes. When used as part of the ABAP syntax, curly brackets { } are shown in the same color as all other language elements and are not shown in italics.
    Example:
    *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}*
    

-   A string of dots ... means that other parts of the statement can be included at this point.
    Example:
    ... AS CHECKBOX
