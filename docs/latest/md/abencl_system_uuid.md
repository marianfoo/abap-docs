---
title: "System Class for UUIDs"
description: |
  The methods CREATE_... of the class CL_SYSTEM_UUID create UUIDs(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuuid_glosry.htm 'Glossary Entry') with a length of 16 bytes in the following formats: -   16-character byte-like representation -   22-character character-like rep
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_system_uuid.htm"
abapFile: "abencl_system_uuid.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "abencl", "system", "uuid"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20for%20UUIDs%2C%20ABENCL_SYSTEM_UUID%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class for UUIDs

The methods CREATE\_... of the class CL\_SYSTEM\_UUID create [UUIDs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuuid_glosry.htm "Glossary Entry") with a length of 16 bytes in the following formats:

-   16-character byte-like representation
-   22-character character-like representation in [Base64](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbase64_glosry.htm "Glossary Entry")
-   26-character character-like representation in Base32
-   32-character character-like hexadecimal representation

The methods CONVERT\_... convert these formats to each other.

The methods are defined in interfaces like IF\_SYSTEM\_UUID.

Example

Creation of a 16-character byte-like UUID and conversion to other formats. The class CL\_DEMO\_UUIDS executes this source code and displays the result.

FINAL(system\_uuid) = cl\_uuid\_factory=>create\_system\_uuid( ).
TRY.
    FINAL(uuid\_x16) = system\_uuid->create\_uuid\_x16( ).
    system\_uuid->convert\_uuid\_x16( EXPORTING
                                     uuid = uuid\_x16
                                   IMPORTING
                                     uuid\_c22 = FINAL(uuid\_c22)
                                     uuid\_c26 = FINAL(uuid\_c26)
                                     uuid\_c32 = FINAL(uuid\_c32) ).
  CATCH cx\_uuid\_error.
    ...
ENDTRY.