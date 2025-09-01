---
title: "EXPORT, IMPORT - Short Form of the Parameter List"
description: |
  Obsolete Syntax EXPORT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm) dobj1 dobj2 ... TO medium(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm) COMPRESSIONONOFF. IMPORT(https://help.sap.com
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_import_obsolete.htm"
abapFile: "abapexport_import_obsolete.htm"
keywords: ["select", "do", "if", "try", "class", "data", "internal-table", "abapexport", "import", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_obsolete.htm) → 

EXPORT, IMPORT - Short Form of the Parameter List

Obsolete Syntax

[EXPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm) dobj1 dobj2 ... TO [medium](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm) *\[*COMPRESSION*{*ON*|*OFF*}**\]*.
[IMPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_data_cluster.htm) dobj1 dobj2 ...  FROM [medium](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_medium.htm) *\[*[conversion\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_conversion.htm)*\]*.

Effect

If the parameter lists of the statements [EXPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm) or [IMPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_data_cluster.htm) use the short form
dobj1 dobj2 ...
instead of
p1 = dobj1 p2 = dobj2 ...
or
p1 FROM*|*TO dobj1 p2 FROM*|*TO dobj2
the parameters are saved or found implicitly in the cluster under the name of the specified data object.

This short form is only allowed outside of classes and only if the name does not contain an address specified using an [instance component selector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"). If the short form is possible, it can be mixed with the correct form:

dobj1 p2 = dobj2 ...

This short form is prone to errors, since the current name is used as IDs of the saved data. When imported into another context, the names of the exporting context must be known and specified identically.

Note

If the parameter list is specified dynamically in an internal table ptab, the short form is also supported by specifying a single-column table (outside of classes). Just like the static short form, this is now also obsolete.