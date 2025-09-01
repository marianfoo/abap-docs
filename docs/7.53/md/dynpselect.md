  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) → 

SELECT - Dynpro

Obsolete Syntax

SELECT \*
       FROM dbtab
       WHERE col1 = f1 AND col2 = f2 ...
       INTO wa
       WHENEVER *\[*NOT*\]* FOUND
         SEND *{* ERRORMESSAGE *|* WARNING *}* *\[*num *\[*WITH *{* p1 ... *}**\]**\]*.

Effect

The use of the statement SELECT as a standalone statement in the dynpro flow logic is obsolete. The effect of the statement is described in its (also obsolete) use as an addition of the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_value_select.htm) .

Note

If the SELECT statement is used in the dynpro flow logic, [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") is applied, if activated.