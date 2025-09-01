---
title: "SUPPRESS DIALOG"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsuppress_dialog_shortref.htm) Syntax SUPPRESS DIALOG. Effect If this statement is specified during PBO(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm 'Glossary Entry') processing, the cu
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsuppress.htm"
abapFile: "abapsuppress.htm"
keywords: ["do", "while", "if", "try", "abapsuppress"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) → 

SUPPRESS DIALOG

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsuppress_dialog_shortref.htm)

Syntax

SUPPRESS DIALOG.

Effect

If this statement is specified during [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") processing, the current [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_number_glosry.htm "Glossary Entry") is processed without displaying the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry"), while the screen of the previous dynpro remains visible. After PBO processing, the system triggers the event [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") in the same way as if a user had pressed Enter. The function code assigned to this key in the current GUI status is then transported to sy-ucomm and to the OK field. Outside of PBO processing, this statement is ignored.

If the statement [MESSAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm) is used to send either a [termination message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentermination_message_glosry.htm "Glossary Entry"), [error message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry"), [information message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninformation_message_glosry.htm "Glossary Entry"), or a [warning](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwarning_glosry.htm "Glossary Entry") during PAI processing, the screen of the current dynpro is displayed together with the message.

Example

The statement SUPPRESS DIALOG can be used to display lists while dynpros are being processed without displaying the screen of the dynpro where the list is created.

MODULE call\_list OUTPUT.
  SUPPRESS DIALOG.
  SET PF-STATUS space.
  WRITE 'Basic List'.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
ENDMODULE.