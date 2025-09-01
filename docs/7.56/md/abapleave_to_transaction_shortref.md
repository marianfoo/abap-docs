  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

LEAVE TO TRANSACTION - Short Reference

[Reference](javascript:call_link\('abapleave_to_transaction.htm'\))

Syntax

LEAVE TO *{* *{*TRANSACTION ta*}* *|* *{*CURRENT TRANSACTION*}* *}*
         *\[*AND SKIP FIRST SCREEN*\]*.

Effect

Calls either the [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") of the transaction code specified in ta or the current transaction without returning to the call position.

Addition

-   AND SKIP FIRST SCREEN
    Suppresses the initial screen.