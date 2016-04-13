package com.openfaces.table.test;

/**
 * Created by sergey.pensov on 11.03.2016.
 */
public class Bank {
    private static int idCounter = 0;

    private int id;
    private String institutionName;
    private int certificateNumber;
    private String city;
    private State state;
    private int zip;
    private String county;
    private int averageAssets;
    private String selectedTextAlign;

    public Bank(
            String institutionName,
            int certificateNumber,
            String city,
            String state,
            int zip,
            String county,
            int averageAssets) {
        this.id = idCounter++;
        this.institutionName = institutionName;
        this.certificateNumber = certificateNumber;
        this.city = city;
        this.state = State.valueOf(state);
        this.zip = zip;
        this.county = county;
        this.averageAssets = averageAssets;
    }

    public int getId() {
        return id;
    }

    public String getInstitutionName() {
        return institutionName;
    }

    public void setInstitutionName(String institutionName) {
        this.institutionName = institutionName;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getCertificateNumber() {
        return certificateNumber;
    }

    public String getCity() {
        return city;
    }

    public State getState() {
        return state;
    }

    public int getZip() {
        return zip;
    }

    public String getCounty() {
        return county;
    }

    public int getAverageAssets() {
        return averageAssets;
    }

    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Bank)) return false;

        Bank bank = (Bank) o;

        if (averageAssets != bank.averageAssets) return false;
        if (certificateNumber != bank.certificateNumber) return false;
        if (zip != bank.zip) return false;
        if (city != null ? !city.equals(bank.city) : bank.city != null) return false;
        if (county != null ? !county.equals(bank.county) : bank.county != null) return false;
        if (institutionName != null ? !institutionName.equals(bank.institutionName) : bank.institutionName != null)
            return false;
        if (state != null ? !state.equals(bank.state) : bank.state != null) return false;

        return true;
    }

    public int hashCode() {
        int result;
        result = (institutionName != null ? institutionName.hashCode() : 0);
        result = 31 * result + certificateNumber;
        result = 31 * result + (city != null ? city.hashCode() : 0);
        result = 31 * result + (state != null ? state.hashCode() : 0);
        result = 31 * result + zip;
        result = 31 * result + (county != null ? county.hashCode() : 0);
        result = 31 * result + averageAssets;
        return result;
    }

    public enum State {
        AK("Alaska"),
        AL("Alabama"),
        AR("Arkansas"),
        AZ("Arizona"),
        CA("California"),
        CO("Colorado"),
        CT("Connecticut"),
        DC("Dist Of Col"),
        DE("Delaware"),
        FL("Florida"),
        GA("Georgia"),
        HI("Hawaii"),
        IA("Iowa"),
        ID("Idaho"),
        IL("Illinois"),
        IN("Indiana"),
        KS("Kansas"),
        KY("Kentucky"),
        LA("Louisiana"),
        MA("Massachusetts"),
        MD("Maryland"),
        ME("Maine"),
        MI("Michigan"),
        MN("Minnesota"),
        MO("Missouri"),
        MS("Mississippi"),
        MT("Montana"),
        NC("North Carolina"),
        ND("North Dakota"),
        NE("Nebraska"),
        NH("New Hampshire"),
        NJ("New Jersey"),
        NM("New Mexico"),
        NV("Nevada"),
        NY("New York"),
        OH("Ohio"),
        OK("Oklahoma"),
        OR("Oregon"),
        PA("Pennsylvania"),
        RI("Rhode Island"),
        SC("South Carolina"),
        SD("South Dakota"),
        TN("Tennessee"),
        TX("Texas"),
        UT("Utah"),
        VA("Virginia"),
        VT("Vermont"),
        WA("Washington"),
        WI("Wisconsin"),
        WV("West Virginia"),
        WY("Wyoming");
        private String description;

        private State(String description) {
            this.description = description;
        }

        public String getDescription() {
            return description;
        }
    }

    public String getSelectedTextAlign() {
        return selectedTextAlign;
    }

    public void setSelectedTextAlign(String selectedTextAlign) {
        this.selectedTextAlign = selectedTextAlign;
    }
}