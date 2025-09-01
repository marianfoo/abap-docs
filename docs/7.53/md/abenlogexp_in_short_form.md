---
title: "Obsolete Syntax"
description: |
  ... seltab ... Effect This relational expression has the same effect as the comparison expression ... operand IN seltab ...(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_select_option.htm) Here, operand is the data object for which a selection table seltab was declared usin
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_in_short_form.htm"
abapFile: "abenlogexp_in_short_form.htm"
keywords: ["select", "do", "if", "try", "method", "data", "abenlogexp", "short", "form"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_program_flow.htm) →  [Obsolete Relational Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_logexp.htm) → 

rel\_exp - IN, Short Form

Obsolete Syntax

... seltab ...

Effect

This relational expression has the same effect as the comparison expression

[... operand IN seltab ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_select_option.htm)

Here, operand is the data object for which a selection table seltab was declared using

[SELECT-OPTIONS seltab FOR operand](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options.htm).

The short form is only possible for selections tables declared using the statement SELECT-OPTIONS and with a statically specified data object. More specifically, the short form is not possible for [ranges tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry").

Notes

-   Using this short form makes a program more difficult to understand. In particular, using this short form in processing blocks not immediately adjacent to the declaration of the selection table declaration can make the program confusing.

-   More specifically, this short form should not be confused with a [predicative method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry"). A call of this type is false if its result is initial, whereas the short form shown here is always true for an initial selection table.

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