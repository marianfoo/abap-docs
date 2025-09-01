---
title: "SUPPLY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsupply_shortref.htm) Obsolete Syntax SUPPLY key1 = f1 key2 = f2 ... TO CONTEXT context_ref. Effect This statement fills the key fields key1 key2 ... of a context(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/e
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsupply.htm"
abapFile: "abapsupply.htm"
keywords: ["do", "if", "try", "data", "abapsupply"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Contexts (Obsolete)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontext.htm) → 

SUPPLY

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsupply_shortref.htm)

Obsolete Syntax

SUPPLY key1 = f1 key2 = f2 ... TO CONTEXT context\_ref.

Effect

This statement fills the key fields key1 key2 ... of a [context](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontext_glosry.htm "Glossary Entry") instance with the values of data objects f1 f2 ... context\_ref expects a data object that points to a context instance (see [CONTEXTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcontexts.htm)). The names of key fields of the context in question can be specified for key1 key2 ... f1 f2 ... expects data objects whose data type matches the respective key field key1 key2 ...

The SUPPLY statement overwrites only the specified key fields with new values. If not all key fields are specified, the previous values are kept. The values of all fields of the context instance derived from a changed key field are rendered invalid by the SUPPLY statement.