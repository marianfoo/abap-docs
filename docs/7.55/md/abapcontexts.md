---
title: "CONTEXTS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcontexts_shortref.htm) Obsolete Syntax CONTEXTS con. Effect This statement can be specified in the global declaration part of a program or in the local declaration part of a procedure(https://help.sap.com/doc/abapdocu
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcontexts.htm"
abapFile: "abapcontexts.htm"
keywords: ["do", "if", "try", "data", "abapcontexts"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_storage_obsolete.htm) →  [Contexts (Obsolete)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontext.htm) → 

CONTEXTS

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcontexts_shortref.htm)

Obsolete Syntax

CONTEXTS con.

Effect

This statement can be specified in the global declaration part of a program or in the local declaration part of a [procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry"). It creates a structured data type, local to the program, which can be used to create an instance of the [context](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontext_glosry.htm "Glossary Entry") con. For con, the name of a context defined in the current [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry") can be specified. The name of the new data type is made up of the prefix context\_ and the name con of the specified context.

If the data type context\_con (created using CONTEXTS) is used after the [addition TYPE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_simple.htm) of the statement [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata.htm), an instance of the context con is created to which the declared data object points. The data object cannot be declared as a component of a structure. The content of the new data object is interpreted as a reference. After an assignment to another data object of the same data type, this data object points to the same context instance.

In addition to the data type context\_con, another structured data type context\_t\_con is created. For each field of the context, this data type contains an identically named component with its relevant data type.

Hint

Data objects declared with the data type context\_con should only be used in the statements [SUPPLY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsupply.htm) and [DEMAND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdemand.htm).