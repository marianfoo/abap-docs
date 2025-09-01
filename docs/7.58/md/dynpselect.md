  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](javascript:call_link\('abendynpro_obsolet.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20SELECT%2C%20DYNPSELECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - SELECT

Obsolete Syntax

SELECT \*
       FROM dbtab
       WHERE col1 = f1 AND col2 = f2 ...
       INTO wa
       WHENEVER *\[*NOT*\]* FOUND
         SEND *{* ERRORMESSAGE *|* WARNING *}* *\[*num *\[*WITH *{* p1 ... *}**\]**\]*.

Effect

The standalone use of the statement SELECT in the dynpro flow logic is obsolete. The effect of the statement is described in its also obsolete use as an addition of the statement [FIELD](javascript:call_link\('dynpfield_value_select.htm'\)).

Hint

If the SELECT statement is used in the dynpro flow logic, [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is applied, if activated.