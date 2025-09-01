  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Comparison Expressions](javascript:call_link\('abenobsolete_logexp.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20IN%2C%20Short%20Form%2C%20ABENLOGEXP_IN_SHORT_FORM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

rel\_exp - IN, Short Form

Obsolete Syntax

... selcrit ...

Effect

This relational expression has the same effect as the comparison expression

[... operand IN selcrit ...](javascript:call_link\('abenlogexp_select_option.htm'\))

Here, operand is the data object for which the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") selcrit was declared using

[SELECT-OPTIONS selcrit FOR operand](javascript:call_link\('abapselect-options.htm'\)).

The short form is only possible for selections tables declared using the statement SELECT-OPTIONS and with a statically specified data object. More specifically, the short form is not possible for [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry").

Hints

-   Using this short form makes a program more difficult to understand. In particular, using this short form in processing blocks that are not immediately adjacent to the declaration of the selection table declaration can make the program confusing.
-   More specifically, this short form should not be confused with a [predicative method call](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry"). A call of this type is false if its result is initial, whereas the short form shown here is always true for an initial selection table.

Example

Fills a selection table s\_number and evaluates it using the short form number IN s\_number. The output consists of the numbers 5, 7, and 9.

DATA number TYPE i.
SELECT-OPTIONS s\_number FOR number NO-DISPLAY.
s\_number\[\] = VALUE #(
  ( sign   = 'I' option = 'EQ' low = 9 )
  ( sign   = 'I' option = 'BT' low = 3 high = 7 )
  ( sign   = 'E' option = 'EQ' low = 6 )
  ( sign   = 'E' option = 'BT' low = 1 high = 4 ) ).
DO 10 TIMES.
  number = sy-index.
  IF s\_number.
    cl\_demo\_output=>write\_data( sy-index ).
  ENDIF.
ENDDO.
cl\_demo\_output=>display( ).