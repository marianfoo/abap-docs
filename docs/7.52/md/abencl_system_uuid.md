  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) → 

System Class for UUIDs

The methods CREATE\_... of the class CL\_SYSTEM\_UUID create [UUIDs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuuid_glosry.htm "Glossary Entry") with a length of 16 bytes in the following formats:

-   16-character byte-like representation

-   22-character character-like representation in [Base64](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbase64_glosry.htm "Glossary Entry")

-   26-character character-like representation in Base32

-   32-character character-like hexadecimal representation

The methods CONVERT\_... convert these formats to each other.

Example

Creates a 16-character byte-like UUID and converts it to other formats. The program DEMO\_UUIDS executes this source code and displays the result.

DATA(system\_uuid) = cl\_uuid\_factory=>create\_system\_uuid( ).
TRY.
    DATA(uuid\_x16) = system\_uuid->create\_uuid\_x16( ).
    system\_uuid->convert\_uuid\_x16( EXPORTING
                                     uuid = uuid\_x16
                                   IMPORTING
                                     uuid\_c22 = DATA(uuid\_c22)
                                     uuid\_c26 = DATA(uuid\_c26)
                                     uuid\_c32 = DATA(uuid\_c32) ).
  CATCH cx\_uuid\_error.
    ...
ENDTRY.