---
title: "host_variable_glosry"
description: |
  host_variable_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm"
abapFile: "abenhost_variable_glosry.htm"
keywords: ["do", "if", "try", "data", "abenhost", "variable", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

host variable

ABAP [data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm "Glossary Entry") specified in an operand position of an [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) statement or of a statically embedded [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec_host.htm) statement . The ABAP data object can be a [variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvariable_glosry.htm "Glossary Entry") or a [constant](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstant_glosry.htm "Glossary Entry") (see [host constant](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_constant_glosry.htm "Glossary Entry")). In ABAP SQL, a host variable must be prefixed with the [escape character](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenescape_character_glosry.htm "Glossary Entry") @ ; in Native SQL with the escape character : . In [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry"), instead of host variables, the placeholder ?, to which ABAP data objects are bound, is used.