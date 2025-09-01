  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Fields](javascript:call_link\('abenabap_dynpros_fields.htm'\)) →  [Screen Fields - Examples](javascript:call_link\('abendynpro_field_abexas.htm'\)) → 

Dynpros, Strings

This example demonstrates how to bind strings to dynpro fields.

Source Code

REPORT demo\_dynpro\_strings.
DATA: string1 TYPE string,
      string2 TYPE string,
      char1   TYPE c LENGTH 10,
      char2   TYPE c LENGTH 100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA  len TYPE i.
    string1 = \`123       \`.
    string2 = \`12345678901234567890\`.
    char1   = string1.
    char2   = string2.
    len = STRLEN( string1 ).
    WRITE:  'PBO:',
          / 'Length of STRING1:',  len.
    len = STRLEN( char1 ).
    WRITE: / 'Length of CHAR1:  ', len.
    len = STRLEN( string2 ).
    WRITE: / 'Length of STRING2:', len.
    len = STRLEN( char2 ).
    WRITE: / 'Length of CHAR2:  ', len.
    ULINE.
    CALL SCREEN 100.
    len = STRLEN( string1 ).
    WRITE:  'PAI:',
          / 'Length of STRING1:',  len.
    len = STRLEN( char1 ).
    WRITE: / 'Length of CHAR1:  ', len.
    len = STRLEN( string2 ).
    WRITE: / 'Length of STRING2:', len.
    len = STRLEN( char2 ).
    WRITE: / 'Length of CHAR2:  ', len.
    ULINE.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
   demo=>main( ).

Description

The static next dynpro number of dynpro 100 is 0. There are four input fields STRING1, STRING2, CHAR1, and CHAR2 of type CHAR with a length of 10. No modules are called in the dynpro flow logic.

When the program is executed, the screen is displayed with the values "123" and "1234567890" in the fields STRING1/CHAR1 and STRING2/CHAR2. After confirming with Continue, a list appears that displays the length of the content of the associated ABAP fields at PBO and PAI.

At PBO, STRING1 contains ten characters, seven of which are trailing blanks. These are lost during the assignment to CHAR1 and the character length of CHAR1 is only three.

At PAI, STRING1 contains only three characters, because the blanks are suppressed during the transport to and from the dynpro.

In both STRING2 and CHAR2, all characters that do not fit into the corresponding dynpro fields are cut off.