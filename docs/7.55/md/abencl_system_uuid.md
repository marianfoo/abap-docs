  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

System Class for UUIDs

The methods CREATE\_... of the class CL\_SYSTEM\_UUID create [UUIDs](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") with a length of 16 bytes in the following formats:

-   16-character byte-like representation

-   22-character character-like representation in [Base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry")

-   26-character character-like representation in Base32

-   32-character character-like hexadecimal representation

The methods CONVERT\_... convert these formats to each other.

The methods are defined in interfaces like IF\_SYSTEM\_UUID.

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