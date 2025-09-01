  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_abap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET PF-STATUS, Dynpro, ABAPSET_PF-STATUS_DYNPRO, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

SET PF-STATUS, Dynpro

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_shortref.htm)

Syntax

SET PF-STATUS status *\[*OF PROGRAM prog*\]* *\[*EXCLUDING fcode*\]*.

Additions:

[1\. ... OF PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... EXCLUDING fcode](#!ABAP_ADDITION_2@2@)

Effect

In [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") processing, this statement defines the [GUI status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_status_glosry.htm "Glossary Entry") specified in status for the subsequent [screen layouts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry"). The components of the set status are active in the user interface from the next time a screen layout is sent and remain active until the end of the program or until the next SET PF-STATUS statement. The name of the current GUI status can be read from the system field sy-pfkey.

status expects a character-like data object that contains either the name of the GUI status of the [main program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_group_glosry.htm "Glossary Entry"), or the program specified in uppercase or only blanks in prog. If the status is not available, an empty status is displayed in which no control elements are active except for the predefined system functions. Of these functions, only the Enter key, to which an empty function code is assigned in this case, raises the event [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry"). If the data object status contains only blanks, the [standard list status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_list.htm) is set and the additions have no effect.

Hints

-   The GUI status of a dynpro must be set at the latest during the event [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry"). If no GUI status is set for a dynpro, the empty status described above is used.
-   If the set GUI status contains dynamic function texts, the function texts are read from the assigned global data objects of the program in which the GUI status is defined. If these do not exist, question marks (?) are displayed. For dynamic function texts, an explicitly specified program prog is loaded into the current [program group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_group_glosry.htm "Glossary Entry") if it does not already exist in the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"). This enables access to its global data objects.
-   The statement SET PF-STATUS has a variant for the GUI status of [lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_list.htm).
-   There is no guarantee that the statement SET PF-STATUS will work at [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry") for the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_overview.htm). This statement should no longer be used for selection screens.
-   If a [switch](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry") is assigned to an element of the GUI status in the Menu Painter, this controls the activation of this element.

Addition 1   

...  OF PROGRAM prog

Effect

By default, a GUI status defined in the current [main program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_program_glosry.htm "Glossary Entry") is used. The addition OF PROGRAM can be used to set the GUI status of the program specified in prog. prog expects a character-like data object that contains the name of the ABAP program in uppercase letters.

Addition 2   

... EXCLUDING fcode

Effect

The addition EXCLUDING can be used to deactivate functions of the set GUI status. An inactive function cannot be selected in the user interface. fcode expects either a character-like data object or an internal table with a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like line type. The functions whose function codes are contained in the field or in the lines of the internal table are deactivated. Only one function code can be specified for each line of the table. The codes are not case-sensitive. Function codes specified in fcode for which there is no function in the GUI status are ignored.

Example

Sets the GUI status STATUS\_0100 of the current main program in a PBO module, where the functions with the function codes CHANGE and SAVE are deactivated.

DATA fcode TYPE TABLE OF sy-ucomm.
...
MODULE status\_0100 OUTPUT.
  fcode = VALUE #(
    ( 'CHANGE' )
    (  'SAVE' ) ).
  SET PF-STATUS 'STATUS\_0100' EXCLUDING fcode.
ENDMODULE.