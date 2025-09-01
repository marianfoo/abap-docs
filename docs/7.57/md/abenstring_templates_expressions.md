  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_tmpl - embedded_expressions, ABENSTRING_TEMPLATES_EXPRESSIONS, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

string\_tmpl - embedded\_expressions

Syntax

{ embd\_exp *\[*[format\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm)*\]* }

Effect

Within a string template, an opening and a closing curly bracket { ... } define a [general expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), embd\_exp, at which the following can be specified in ABAP syntax:

-   [Data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_object_glosry.htm "Glossary Entry")
-   [Calculation expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_expression_glosry.htm "Glossary Entry")
-   [Constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry")
-   [Table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry")
-   [Built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_function_glosry.htm "Glossary Entry")
-   [Functional methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry")

At least one blank must be included on the right of the opening bracket and one the left of the closing bracket. An embedded expression must be complete within the current string template. An embedded expression within the curly brackets is handled in accordance with regular ABAP syntax:

-   Tokens must be separated by at least one blank or line break.
-   In other cases, blanks and line breaks between tokens are not significant.
-   No distinction is made between uppercase and lowercase letters.
-   [Comments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomment_glosry.htm "Glossary Entry") can be specified.

The data type of the expression must be an [elementary data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") and the value of the expression must be character-like or be convertible to a character string. When a string template is evaluated, the value of each embedded expression is converted to a character string and inserted at the corresponding position. The string is formatted either using

-   [Predefined formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm)
-   Formatting options [format\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm)

The embedded expressions in a string template are evaluated from left to right. If [functional methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are specified, they are executed during the analysis.

Hints

-   To display the curly brackets { and } in the [literal text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_literals.htm) of a string template, they must be prefixed with the escape character \\.
-   Curly brackets cannot be nested directly. If embd\_expr is itself a string expression, or contains a string expression, it can also contain embedded expressions.
-   [String functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_function_glosry.htm "Glossary Entry") with character-like return values are particularly suited when embedded functions are specified.
-   Unlike [arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm) and [bit expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_bit.htm), embedded functional methods are not executed before the entire expression is evaluated. If an embedded functional method modifies the value of data objects that are also used as embedded operands, the change only affects data objects on the right of the method.

Example

The string template in the method main uses embedded expressions to represent the text Hello world!. The first embedded expression is the attribute attr of the class. The return value of the method func is used in the second embedded expression. The third embedded expression is again the attribute attr, whose value has been changed in the method func in the meantime. The second embedded expression includes a line break and a comment is specified.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main,
                   func RETURNING value(p) TYPE string.
  PRIVATE SECTION.
    CLASS-DATA attr TYPE string VALUE \`Hello\`.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA txt TYPE string.
    txt = |{ attr }{ func( ) "a function call
                     WIDTH = 6 ALIGN = RIGHT }{ attr }|.
    cl\_demo\_output=>display( txt ).
  ENDMETHOD.
  METHOD func.
    p = \`world\`.
    attr = '!'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Continue
[embd\_exp - Predefined Formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_predef_format.htm)
[embd\_exp - format\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm)