---
title: "SET TITLEBAR, Dynpro"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_titlebar_shortref.htm) Syntax SET TITLEBAR title OF PROGRAM prog WITH text1 ... text9. Additions: 1. ... OF PROGRAM prog(#!ABAP_ADDITION_1@1@) 2. ... WITH text1 ... text9(#!ABAP_ADDITION_2@2@)
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_titlebar_dynpro.htm"
abapFile: "abapset_titlebar_dynpro.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapset", "titlebar", "dynpro"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_abap_statements.htm) → 

SET TITLEBAR, Dynpro

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_titlebar_shortref.htm)

Syntax

SET TITLEBAR title *\[*OF PROGRAM prog*\]*
                   *\[*WITH text1 ... text9*\]*.

Additions:

[1\. ... OF PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... WITH text1 ... text9](#!ABAP_ADDITION_2@2@)

Effect

When [dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") are processed, this statement specifies the GUI title (specified in title) for the subsequent [screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry"). The title is displayed in the title bar from the next sending of one screen until the end of the program or until the next SET TITLEBAR statement. The name of the current GUI title is displayed in the system field sy-title.

title expects a character-like data object that contains the name of a GUI title of the [main program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_group_glosry.htm "Glossary Entry") or of the program specified in prog in uppercase letters. If the title does not exist, sy-subrc is set to 4 and the word "SAP" is displayed in the title bar.

System Fields

sy-subrc

Meaning

0

GUI title has been set.

4

Could not find GUI title.

Hints

-   The GUI title of the dynpro must be set before the [PBO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpbo_glosry.htm "Glossary Entry") event. If no GUI title is set for a screen, the word "SAP" is displayed in the title bar.

-   The title bar can contain a maximum of 70 characters. A title that exceeds this limit after the replacement of placeholders is truncated to the right.

-   In [standard selection screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry"), the statement SET PF-STATUS can be used at [PBO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpbo_glosry.htm "Glossary Entry") time. In selection screens defined using [SELECTION-SCREEN BEGIN OF SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_definition.htm), the addition TITLE of this statement should be used instead.

-   The statement SET TITLEBAR contains a variant for the GUI status of [lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_titlebar_list.htm).
    

Addition 1

... OF PROGRAM prog

Effect

By default, a GUI title defined in the current main program is used. When using the addition OF PROGRAM, a GUI title of the program specified in prog can be set. prog expects a character-like data object that contains the name of a ABAP program in uppercase letters.

Addition 2

... WITH text1 ... text9

Effect

When using the addition WITH, the placeholders of the GUI title can be replaced by the formatted contents of data objects text1 to text9. Data objects text1 to text9 can have the same data type as a source field of the statement [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm) and are formatted based on the [predefined formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_formats.htm). The placeholders of the GUI title can be defined in the form "&" or "&i", where i can be a number between 1 and 9. The replacement process works as follows:

-   The numbered placeholders "&i" are replaced with the formatted contents of the data objects text1 to text9, whose names contain the same digit i in the second place.

-   The non-numbered placeholders "&" are replaced with the contents of the remaining data objects text1 to text9 according to their order.

If no data object is specified for a placeholder, it is represented by a blank character. Two successive "&" characters "&&" in the title bar are not replaced with the contents of text1 to text9, but with the character "&".

Hint

If a GUI title is to be translated into other languages, the numbered placeholder "&i" should be used, since the structure of the sentence can change.

Example

In the following example, the GUI title TITLE\_0100 of the program specified in prog is set in a [PBO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpbo_glosry.htm "Glossary Entry") module, where the placeholders "&1" and "&2" of the title are replaced with the formatted contents p1 and p2.

DATA: title TYPE string,
      prog  TYPE string,
      p1    TYPE c LENGTH 10,
      p2    TYPE c LENGTH 10.
...
MODULE status\_0100 OUTPUT.
  ...
  title = 'TITLE\_0100'.
  prog  = '...'.
  p1 = '...'.
  p2 = '...'.
  SET TITLEBAR title OF PROGRAM prog WITH p1 p2.
  ...
ENDMODULE.