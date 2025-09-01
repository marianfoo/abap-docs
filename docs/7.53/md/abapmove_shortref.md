  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

MOVE - Quick reference

[Reference](javascript:call_link\('abapmove_obs.htm'\))

Syntax

MOVE *{**\[*EXACT*\]* source  TO destination*}*
   *|* *{*        source ?TO destination*}*.

Effect

Obsolete: Assigns the content of source to destination. To assign a general reference variable to a more specialized one, ?TO must be used.

Addition

-   EXACT
    Forces a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").