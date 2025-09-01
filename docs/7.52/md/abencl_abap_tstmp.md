  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamps.htm) → 

System Class for Time Stamps

The class CL\_ABAP\_TSTMP is used to calculate and convert [time stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm). Important methods include:

-   The method ADD or SUBTRACTSECS adds or subtracts seconds from time stamps.

-   The method TD\_SUBTRACT calculates the difference between two time stamps.

-   The method MOVE converts the long form of time stamps to the short form, and back, avoiding unwanted rounding effects.

-   The method NORMALIZE normalizes time stamps. Invalid time stamps are converted into valid time stamps.

Example

Creation of a one hour earlier time stamp by subtracting 3600 seconds.

GET TIME STAMP FIELD DATA(ts1).
DATA(ts2) = cl\_abap\_tstmp=>subtractsecs( tstmp = ts1
                                         secs  = 3600 ).
cl\_demo\_output=>display( |{ ts1 TIMESTAMP = ISO
                       }\\n{ ts2 TIMESTAMP = ISO }| ).