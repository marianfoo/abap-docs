  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_abap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SUPPRESS%20DIALOG%2C%20ABAPSUPPRESS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SUPPRESS DIALOG

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsuppress_dialog_shortref.htm)

Syntax

SUPPRESS DIALOG.

Effect

If this statement is specified during [PBO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpbo_glosry.htm "Glossary Entry") processing, the current [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_number_glosry.htm "Glossary Entry") is processed without displaying the [screen layout](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry"), while the screen layout of the previous dynpro remains visible. After PBO processing, the system raises the event [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") in the same way as if a user had pressed Enter. The function code assigned to this key in the current GUI status is then transported to sy-ucomm and to the OK field. Outside of PBO processing, this statement is ignored.

If the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) is used to send either a [termination message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentermination_message_glosry.htm "Glossary Entry"), [error message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_message_glosry.htm "Glossary Entry"), [information message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninformation_message_glosry.htm "Glossary Entry"), or a [warning](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwarning_glosry.htm "Glossary Entry") during PAI processing, the screen of the current dynpro is displayed together with the message.

Example

The statement SUPPRESS DIALOG can be used to display lists while dynpros are being processed without displaying the screen of the dynpro where the list is created.

MODULE call\_list OUTPUT.
  SUPPRESS DIALOG.
  SET PF-STATUS space.
  WRITE 'Basic List'.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
ENDMODULE.