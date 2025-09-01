---
title: "ABAP and OLE"
description: |
  ABAP can be used to edit automation objects whose functions are available in the presentation layer in the form of an OLE Automation server. Only automation objects for Windows are supported. Typical applications that offer an automation interface are Microsoft Office products Excel and Word, for wh
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenole2.htm"
abapFile: "abenole2.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenole2"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) → 

ABAP and OLE

ABAP can be used to edit automation objects whose functions are available in the presentation layer in the form of an OLE Automation server. Only automation objects for Windows are supported. Typical applications that offer an automation interface are Microsoft Office products Excel and Word, for which the published classes and their attributes and methods are found in the object directory of Visual Basic Editor called using the Macro menu option.

All automation applications that can be used by ABAP are contained in the database table TOLE, which is edited using transaction SOLE. This table contains the names of the classes and components supported by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry"). It also contains type information for adapting different data formats. The automation command set consists of the following ABAP statements:

-   [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object_ole2.htm)

-   [CALL METHOD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_ole2.htm)

-   [GET PROPERTY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_property.htm)

-   [SET PROPERTY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_property.htm)

-   [FREE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfree_object.htm),

where CREATE OBJECT and CALL METHOD should not be confused with the ABAP Objects statements using the same syntax.

The statements of the automation command set are passed from the ABAP runtime environment to the SAP GUI on the current presentation server responsible for the actual communication with the automation server. The statements are not passed directly and are first buffered in an automation queue and passed together to SAP GUI in a flush call. By default, a flush is triggered by the next ABAP statement that does not belong to the automation command set.

Note

For editing some of the automation objects, the more general interfaces SAP Desktop Office Integration (DOI) and Control Framework (CFW) are now available. The statements of the automation command set should be used only to access automation applications for which there is no such wrapping.

Continue
[CREATE OBJECT - OLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object_ole2.htm)
[CALL METHOD - OLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_ole2.htm)
[GET PROPERTY - OLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_property.htm)
[SET PROPERTY - OLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_property.htm)
[FREE OBJECT - OLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfree_object.htm)