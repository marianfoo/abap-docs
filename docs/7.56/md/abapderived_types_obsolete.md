  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Statements for RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_obsolete.htm) →  [Obsolete ABAP EML Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_le_obsolete.htm) → 

ABAP EML - Obsolete BDEF Derived Types

Syntax

... *\[*TYPE*\]* *{* TABLE *|* STRUCTURE *}* FOR LOCK bdef.

Effect

Special ABAP type that is used for internal tables and structures in the context of [RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_glosry.htm "Glossary Entry") to enable the communication between a [RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and a [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry").

Overview

The following table covers the variants including information on the BDEF prerequisites and its components.

For more information on the components, see [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm). For more information on the BDEF specifications, see the subtopics in [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm).

TYPE TABLE FOR ...

Purpose

BDEF Prerequisites

Components

LOCK

Used to specify [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") that are to be locked in the context of the ABAP EML statement [SET LOCKS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locks.htm). It is basically the same as TYPE TABLE KEY OF (or TYPE STRUCTURE FOR KEY OF respectively). In ADT, a variable typed with TYPE TABLE FOR LOCK shows TYPE TABLE FOR KEY OF (or TYPE STRUCTURE FOR LOCK shows TYPE STRUCTURE FOR KEY OF respectively) in the element information (F2).

See the details in the CDS BDL documentation for [locking](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_locking.htm).

The keys (not %key).
Note: %is\_draft and %pid are not possible.

Further Information

-   [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm)
-   [TYPE STRUCTURE FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm)