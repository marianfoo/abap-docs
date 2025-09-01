  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_files.htm) → 

Locking Files

The file interface does not contain an integrated locking mechanism that ensures that only one ABAP program at a time can access a file. If multiple programs are writing to a file at the same time, the results are unpredictable.

To avoid this situation, use [SAP locks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_lock_glosry.htm "Glossary Entry") or an unambiguous file name, such as [UUIDs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuuid_glosry.htm "Glossary Entry").

Hint

When multiple AS instances in [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry") try to access a file at the same time, conflicts can still occur despite SAP locks. This is the case, for example, when the operating system buffers data before writing it to a file.