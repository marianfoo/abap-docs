  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SET ASSOCIATION - Quick reference

[Reference](javascript:call_link\('abenmesh_set_association.htm'\))

Syntax

SET ASSOCIATION mesh\_path *{* = wa *}*
                        *|* *{* LIKE wa    *}*
                        *|* *{* INITIAL *}*.

Effect

Sets associations for a [mesh path](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Addition

-   \= wa
    Sets key values for follow-on nodes.

-   LIKE wa
    Sets key values from initial nodes.

-   INITIAL
    Sets initial values.