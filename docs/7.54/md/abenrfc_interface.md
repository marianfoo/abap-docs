  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc.htm) →  [RFC Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_intro_oview.htm) → 

RFC Interface

The RFC interface is required to execute a remote function call. The RFC interface performs the following services:

-   Calling and controlling the communication routines needed to communicate with the remote system

-   Logging on to and log off from the remote system and authorization checks for the function groups used.

-   Converting actual parameters to the format required in the remote system and vice-versa. This includes any platform-dependent conversions (for different [code pages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencodepage_glosry.htm "Glossary Entry") or byte orders, for example). The conversion supports all ABAP data types.

-   Handling any communication errors and forwarding them to the caller if [requested](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_exception.htm).

If the AS ABAP are not the same, two ABAP programs communicate using the RFC interface, whereas for communication between an AS ABAP and an external system, an ABAP program connects with a program in another programming language (C, C++, Visual Basic, Java or .NET).

For communication with programs in other programming languages, RFC libraries are available for all operating systems supported by SAP, including MS Windows, Unix and Linux:

-   Java Connector (JCo) for Java

-   .NET Connector for .NET (C#, VB.NET)

-   RFC Software Development Kit (SDK) for C and C++

Note

Each RFC that runs across the RFC interface on AS ABAP runs in its own user session. The logon data is usually stored in the RFC destination.

More Information

More information about the about the RFC interface is available in the RFC documentation on [SAP Help Portal](http://help.sap.com).