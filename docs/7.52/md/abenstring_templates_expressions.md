  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [string\_exp - String Expressions](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates](javascript:call_link\('abenstring_templates.htm'\)) → 

String Templates - embedded\_expressions

Syntax

{ expr *\[*[format\_options](javascript:call_link\('abapcompute_string_format_options.htm'\))*\]* }

Effect

Within a string template, an opening and a closing curly bracket { ... } define a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") expr in which

-   [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry"),

-   [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"),

-   [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"),

-   [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")

-   [predefined functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry"), or

-   [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry")

can be specified in ABAP syntax. At least one blank must be included on the right of the opening bracket and one the left of the closing bracket. An embedded expression must be complete within the current string template. An embedded expression within the curly brackets is handled in accordance with regular ABAP syntax:

-   Tokens must be separated by at least one blank or line break.

-   In other cases, blanks and line breaks between tokens are not significant.

-   No distinction is made between uppercase and lowercase letters.

-   [Comments](javascript:call_link\('abencomment_glosry.htm'\) "Glossary Entry") can be specified.

The data type of the expression must be an [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") and the value of the expression must be character-like or be convertible to a string. When a string template is analyzed, the value of each embedded expression is converted to a character string. The string is inserted in the correct location. The string is formatted either using

-   [predefined formats](javascript:call_link\('abenstring_templates_predef_format.htm'\)) or

-   formatting options [format\_options](javascript:call_link\('abapcompute_string_format_options.htm'\)).

The embedded expressions in a string template are analyzed from left to right. If [function methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") are specified, they are executed during the analysis.

Notes

-   To display the curly brackets { and } in [literal text](javascript:call_link\('abenstring_templates_literals.htm'\)) in a string template, they must be prefixed with the escape character \\.

-   Curly brackets cannot be nested directly. If expr is itself a string expression, or contains a string expression, it can contain embedded expressions.

-   [String functions](javascript:call_link\('abenstring_function_glosry.htm'\) "Glossary Entry") with character-like return values are recommended when embedded functions are specified.

-   Unlike [arithmetic expressions](javascript:call_link\('abapcompute_arith.htm'\)) and [bit expressions](javascript:call_link\('abapcompute_bit.htm'\)), embedded functional methods are not executed before the whole expression is analyzed. If an embedded functional method modifies the value of data objects that are also used as embedded operands, the change only affects data objects on the right of the method.

-   The delimiter characters "|" can be formatted in the new ABAP Editor by choosing Fonts and Colors → Token operator to highlight them in the source code.

Example

The string template in the method main uses embedded expressions to display the text "Hello world!". The first embedded expression is the attribute attr of the class. The return value of the method func is used in the second embedded expression. The third embedded expression is again the attribute attr, whose value has been changed in the method func in the meantime. The second embedded expression includes a line break and a comment.

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
[Embedded Expressions - Predefined Formats](javascript:call_link\('abenstring_templates_predef_format.htm'\))
[Embedded Expressions - format\_options](javascript:call_link\('abapcompute_string_format_options.htm'\))