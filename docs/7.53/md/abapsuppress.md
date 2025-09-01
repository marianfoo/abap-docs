  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

SUPPRESS DIALOG

[Quick Reference](javascript:call_link\('abapsuppress_dialog_shortref.htm'\))

Syntax

SUPPRESS DIALOG.

Effect

If this statement is specified during [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing, the current [dynpro](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") is processed without displaying the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"), while the screen of the previous dynpro remains visible. After PBO processing, the system triggers the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") in the same way as if a user had pressed Enter. The function code assigned to this key in the current GUI status is then transported to sy-ucomm and to the OK field. Outside of PBO processing, this statement is ignored.

If the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) is used to send either a [termination message](javascript:call_link\('abentermination_message_glosry.htm'\) "Glossary Entry"), [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry"), [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry"), or a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") during PAI processing, the screen of the current dynpro is displayed together with the message.

Example

The statement SUPPRESS DIALOG can be used to display lists while dynpros are being processed without displaying the screen of the dynpro where the list is created.

MODULE call\_list OUTPUT.
  SUPPRESS DIALOG.
  SET PF-STATUS space.
  WRITE 'Basic List'.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
ENDMODULE.