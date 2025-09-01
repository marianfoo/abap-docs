  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Statements in Dynpro Flow Logic](javascript:call_link\('abendynpro_obsolet.htm'\)) → 

SELECT - Dynpro

Obsolete Syntax

SELECT \*
       FROM dbtab
       WHERE col1 = f1 AND col2 = f2 ...
       INTO wa
       WHENEVER *\[*NOT*\]* FOUND
         SEND *{* ERRORMESSAGE *|* WARNING *}* *\[*num *\[*WITH *{* p1 ... *}**\]**\]*.

Effect

The use of the statement SELECT as a standalone statement in the dynpro flow logic is obsolete. The effect of the statement is described in its (also obsolete) use as an addition of the statement [FIELD](javascript:call_link\('dynpfield_value_select.htm'\)) .

Note

If the SELECT statement is used in the dynpro flow logic, [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") is applied, if activated.