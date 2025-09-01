  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Statements for RAP](javascript:call_link\('abenrap_obsolete.htm'\)) →  [Obsolete ABAP EML Language Elements](javascript:call_link\('abenrap_le_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - Obsolete BDEF Derived Types, ABAPDERIVED_TYPES_OBSOLETE, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - Obsolete BDEF Derived Types

Syntax

... *\[*TYPE*\]* *{* TABLE *|* STRUCTURE *}* FOR LOCK bdef.

Effect

Special ABAP type that is used for internal tables and structures in the context of [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") to enable the communication between a [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") and a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry").

Overview

The following table covers the variants including information on the BDEF prerequisites and its components.

For more information on the components, see [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)). For more information on the BDEF specifications, see the subtopics in [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)).

TYPE TABLE FOR ...

Purpose

BDEF Prerequisites

Components

LOCK

Used to specify [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that are to be locked in the context of the ABAP EML statement [SET LOCKS](javascript:call_link\('abapset_locks.htm'\)). It is basically the same as TYPE TABLE KEY OF (or TYPE STRUCTURE FOR KEY OF respectively). In ADT, a variable typed with TYPE TABLE FOR LOCK shows TYPE TABLE FOR KEY OF (or TYPE STRUCTURE FOR LOCK shows TYPE STRUCTURE FOR KEY OF respectively) in the element information (F2).

See the details in the CDS BDL documentation for [locking](javascript:call_link\('abenbdl_locking.htm'\)).

The keys (not %key).
Note: %is\_draft and %pid are not possible.

Further Information

-   [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\))
-   [TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\))