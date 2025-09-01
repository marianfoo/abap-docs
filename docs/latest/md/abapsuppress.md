  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SUPPRESS%20DIALOG%2C%20ABAPSUPPRESS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SUPPRESS DIALOG

[Short Reference](javascript:call_link\('abapsuppress_dialog_shortref.htm'\))

Syntax

SUPPRESS DIALOG.

Effect

If this statement is specified during [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing, the current [dynpro](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") is processed without displaying the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"), while the screen layout of the previous dynpro remains visible. After PBO processing, the system raises the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") in the same way as if a user had pressed Enter. The function code assigned to this key in the current GUI status is then transported to sy-ucomm and to the OK field. Outside of PBO processing, this statement is ignored.

If the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) is used to send either a [termination message](javascript:call_link\('abentermination_message_glosry.htm'\) "Glossary Entry"), [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry"), [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry"), or a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") during PAI processing, the screen of the current dynpro is displayed together with the message.

Example

The statement SUPPRESS DIALOG can be used to display lists while dynpros are being processed without displaying the screen of the dynpro where the list is created.

MODULE call\_list OUTPUT.
  SUPPRESS DIALOG.
  SET PF-STATUS space.
  WRITE 'Basic List'.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
ENDMODULE.